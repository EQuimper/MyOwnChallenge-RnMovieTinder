import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { getMoviesPopular } from './actions';
import { LoadingScreen } from '../../commons';
import { SwiperEL } from '../swiper';

class HomeScreen extends Component {
  componentDidMount() {
    this.props.getMoviesPopular();
  }
  render() {
    const { data, navigator } = this.props;
    if (!data.isFetched) {
      return <LoadingScreen />;
    } else if (!data.error) {
      return <SwiperEL movies={data.movies} navigator={navigator} />;
    }
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }
}

export default connect(
  state => ({
    data: state.home
  }),
  { getMoviesPopular }
)(HomeScreen);
