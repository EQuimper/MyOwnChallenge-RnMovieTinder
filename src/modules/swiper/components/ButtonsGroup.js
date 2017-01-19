import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@exponent/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../constants/Colors';

const ButtonsGroup = ({ like, dislike, info }) => (
  <View style={styles.root}>
    <TouchableOpacity onPress={dislike}>
      <View style={[styles.buttons, { borderColor: Colors.redColor }]}>
        <Ionicons name="ios-thumbs-down" size={50} color={Colors.redColor} />
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={info}>
      <View style={styles.buttonInfo}>
        <FontAwesome name="info" size={20} color="#fff" />
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={like}>
      <View style={[styles.buttons, { borderColor: Colors.blueColor }]}>
        <Ionicons name="ios-thumbs-up" size={50} color={Colors.blueColor} />
      </View>
    </TouchableOpacity>
  </View>
);

const styles = EStyleSheet.create({
  root: {
    flex: 0.5,
    justifyContent: 'space-around',
    width: '80%',
    // alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttons: {
    width: 90,
    height: 90,
    borderWidth: 5,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45
  },
  buttonInfo: {
    width: 50,
    height: 50,
    borderWidth: 10,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  },
});

export default ButtonsGroup;
