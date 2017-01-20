import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import { ButtonsGroup, InfoModal, Card } from './components';
import styles from './styles/SwiperEL';

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
          yupStyle={styles.yupStyle}
          yupTextStyle={styles.yupTextStyle}
          nopeStyle={styles.nopeStyle}
          nopeTextStyle={styles.nopeTextStyle}
        />
        <ButtonsGroup info={this._clickInfo} dislike={this._clickDislike} like={this._clickLike} />
        <InfoModal close={this._clickInfo} visible movie={movies[this.state.cardIndex]} />
      </View>
    );
  }
}

export default SwiperEL;
