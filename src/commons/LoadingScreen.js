import React, { Component } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../constants/Colors';

class LoadingScreen extends Component {
  state = { dots: [] }

  componentDidMount() {
    this._setToggleTimeout();
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  _setToggleTimeout() {
    this._timer = setInterval(() => {
      if (this.state.dots.length === 3) {
        this.setState({ dots: [] });
      } else {
        this.setState({ dots: [...this.state.dots, '.'] });
      }
    }, 1000);
  }

  render() {
    return (
      <View style={styles.root}>
        <ActivityIndicator
          animating
          size="large"
          color={Colors.redColor}
          style={styles.loader}
        />
        <Text style={styles.textStyle}>Loading{this.state.dots}</Text>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '$blackColor',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontFamily: 'montserrat-bold',
    color: '#fff',
    fontSize: 25
  },
  loader: { height: 75 }
});

export default LoadingScreen;
