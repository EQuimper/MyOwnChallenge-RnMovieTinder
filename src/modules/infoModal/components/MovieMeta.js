import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@exponent/vector-icons';
import styles from './styles/MovieMeta';
import Panel from './Panel';
import { getMovieTrailer } from '../actions';
import { Actions } from 'react-native-router-flux';
// import { YT_URL } from '../../../../helpers/api';

class MovieMeta extends Component {
  componentDidMount() {
    this.props.getMovieTrailer(this.props.movie.id);
  }

  _goToTrailer = () => {
    this.props.closeModalInfo();
    Actions.trailer({ trailerId: this.props.data.videos[0].key });
  }

  render() {
    const { movie } = this.props;
    return (
      <View style={styles.bottomContainer}>
        <Panel title="Rating">
          <Text style={styles.panelText}>
            {movie.vote_average} <FontAwesome name="star" color="#fff" /> / {''}
            {movie.vote_count} <FontAwesome name="users" color="#fff" />
          </Text>
        </Panel>
        <Panel title="Release Date">
          <Text style={styles.panelText}>
            <FontAwesome name="calendar" color="#fff" /> {movie.release_date}
          </Text>
        </Panel>
        <Panel title="Trailer">
          <TouchableOpacity onPress={this._goToTrailer}>
            <View>
              <Text>
                Watch here
              </Text>
            </View>
          </TouchableOpacity>
        </Panel>
      </View>
    );
  }
}

export default connect(
  state => ({
    data: state.infoModal
  }),
  { getMovieTrailer }
)(MovieMeta);
