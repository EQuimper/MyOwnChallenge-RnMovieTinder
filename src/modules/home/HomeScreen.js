import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { getMoviesPopular } from './actions';
import { LoadingScreen } from '../../commons';
import { getRandom } from '../../../helpers';
import { SwiperEL } from '../swiper';

class HomeScreen extends Component {
  state = {  }
  componentDidMount() {
    this.props.getMoviesPopular();
  }
  render() {
    const { data } = this.props;
    if (!data.isFetched) {
      return <LoadingScreen />;
    } else if (!data.error) {
      return <SwiperEL movies={data.movies} />;
    }
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  root: { flex: 1, backgroundColor: '$blackColor' }
});

export default connect(
  state => ({
    data: state.home
  }),
  { getMoviesPopular }
)(HomeScreen);
