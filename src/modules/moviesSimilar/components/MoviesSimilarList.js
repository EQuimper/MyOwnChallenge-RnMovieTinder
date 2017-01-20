import React, { Component } from 'react';
import { View, ListView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
import styles from './styles/MoviesSimilarList';
import Colors from '../../../../constants/Colors';
import { InfoModal } from '../../infoModal';
import { openModalInfo, closeModalInfo } from '../../ui';

class MoviesSimilarList extends Component {
  state = {
    dataSource: null,
    loading: false,
    apiIndex: 0,
    end: false
  }

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.setState({
      dataSource: ds.cloneWithRows(this.props.movies)
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loading: false,
      dataSource: this.state.dataSource.cloneWithRows(nextProps.movies)
    });
  }

  _onEndReached = () => {
    if (this.props.liked.length === (this.state.apiIndex + 1)) {
      this.setState({ end: true });
    } else {
      this.setState({ apiIndex: this.state.apiIndex + 1 }, () => {
        this._getMoreMovies();
      });
    }
  }

  _getMoreMovies = async () => {
    const { getMoviesSimilar, liked } = this.props;
    this.setState({ loading: true });
    await getMoviesSimilar(liked[this.state.apiIndex].id);
    this.setState({ loading: false });
  }

  _renderFooter = () => (
    <View style={{ marginVertical: 20 }}>
      <ActivityIndicator
        size="large"
        color={Colors.redColor}
      />
    </View>
  )

  render() {
    console.log(this.state);
    const { modalInfoShow, modalInfoMovie, closeModalInfo, openModalInfo } = this.props;
    return (
      <View style={styles.root}>
        <ListView
          contentContainerStyle={styles.list}
          renderRow={row => <MovieItem openModalInfo={openModalInfo} movie={row} />}
          enableEmptySections
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          onEndReached={this._onEndReached}
          renderFooter={this._renderFooter}
        />
        <InfoModal
          closeModalInfo={closeModalInfo}
          close={() => closeModalInfo()}
          visible={modalInfoShow}
          movie={modalInfoMovie}
        />
      </View>
    );
  }
}

export default connect(
  state => ({
    modalInfoShow: state.ui.modalInfoShow,
    modalInfoMovie: state.ui.modalInfoMovie
  }),
  { openModalInfo, closeModalInfo }
)(MoviesSimilarList);
