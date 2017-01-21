import Exponent, { Font } from 'exponent';
import React from 'react';
import { Provider } from 'react-redux';
// import { persistStore } from 'redux-persist';
import {
  StyleSheet,
  Text,
  View,
  // AsyncStorage
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import store from './src/redux/store';
import Colors from './constants/Colors';
import Routes from './src/Routes';

EStyleSheet.build(Colors);

const fonts = {
  'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
};

class App extends React.Component {
  state = {
    fontLoaded: false,
    rehydrated: false
  }

  async componentDidMount() {
    // await persistStore(store, {
    //   storage: AsyncStorage,
    //   debounce: 500
    // });

    await Font.loadAsync(fonts);

    this.setState({ fontLoaded: true, rehydrated: true });
  }
  render() {
    if (!this.state.fontLoaded && !this.state.rehydrated) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

Exponent.registerRootComponent(App);
