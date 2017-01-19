import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import SwipeCards from 'react-native-swipe-cards';
import { POSTER } from '../../../constants/api';
import { ButtonsGroup, InfoModal } from './components';

class SwiperEL extends Component {
  state = { cardIndex: 0, infoModal: false }

  _handleYup = () => this.setState({ cardIndex: this.state.cardIndex + 1 })

  _handleNope = () => this.setState({ cardIndex: this.state.cardIndex + 1 })

  _clickLike= () => {
    this.setState({ cardIndex: this.state.cardIndex + 1 });
    this._swiper._goToNextCard();
  }

  _clickDislike = () => {
    this.setState({ cardIndex: this.state.cardIndex + 1 });
    this._swiper._goToNextCard();
  }

  _clickInfo = () => this.setState({ infoModal: !this.state.infoModal })

  render() {
    const { movies } = this.props;
    return (
      <View style={styles.root}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>{movies[this.state.cardIndex].title}</Text>
        </View>
        <SwipeCards
          ref={ref => this._swiper = ref} // eslint-disable-line
          containerStyle={styles.swiperContainer}
          cards={movies}
          renderCard={data => <Card {...data} />}
          handleYup={this._handleYup}
          handleNope={this._handleNope}
        />
        <ButtonsGroup info={this._clickInfo} dislike={this._clickDislike} like={this._clickLike} />
        <InfoModal close={this._clickInfo} visible={this.state.infoModal} movie={movies[this.state.cardIndex]} />
      </View>
    );
  }
}

const Card = movie => (
  <View style={styles.posterCard}>
    <Image style={styles.poster} source={{ uri: `${POSTER}/${movie.poster_path}` }} />
  </View>
);

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '$blackColor',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '2%'
  },
  titleContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'montserrat-regular'
  },
  posterCard: {
    borderRadius: 10,
    width: '75%',
    height: '60%',
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowColor: 'black',
    shadowOpacity: 0.8,
  },
  swiperContainer: {
    flex: 1,
    backgroundColor: '$blackColor',
  },
  poster: {
    flex: 1,
    height: null,
    width: null,
    borderRadius: 10
  }
});

export default SwiperEL;
