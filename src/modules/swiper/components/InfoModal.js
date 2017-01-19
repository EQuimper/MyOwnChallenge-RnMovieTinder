import React from 'react';
import { Modal, View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Components } from 'exponent';
import { FontAwesome } from '@exponent/vector-icons';
import { POSTER } from '../../../../constants/api';
// import Colors from '../../../../constants/Colors';

const colors = ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.7)', 'rgba(0,0,0,0.4)'];

const InfoModal = ({ visible, movie, close }) => (
  <Modal visible={visible} transparent animationType="slide">
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={close}>
            <View style={styles.closeButton}>
              <FontAwesome name="close" color="#fff" size={50} />
            </View>
          </TouchableOpacity>
          <Image
            source={{ uri: `${POSTER}/${movie.poster_path}` }}
            style={{ flex: 1 }}
          />
          <Components.LinearGradient colors={colors} style={styles.imagesMeta}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleStyle}>{movie.title}</Text>
            </View>
          </Components.LinearGradient>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
        </View>
      </View>
    </View>
  </Modal>
);

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeButton: {
    position: 'absolute',
    top: '1%',
    right: '2%',
    zIndex: 2,
    backgroundColor: 'transparent'
  },
  imagesMeta: {
    height: '38%',
    width: '75%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1
  },
  topContainer: {
    flex: 1,
    position: 'relative',
  },
  container: {
    backgroundColor: '#fff',
    height: '75%',
    width: '75%',
    borderRadius: 6
  },
  titleContainer: {
    backgroundColor: 'transparent',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '2%',
    flex: 0.2,
    // flexDirection: 'row'
  },
  titleWrapper: {
    alignSelf: 'stretch',
    // justifyContent: 'center',
    flex: 1
  },
  ratingWrapper: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
    alignSelf: 'stretch',
    backgroundColor: '#FFD460',
    borderBottomLeftRadius: 50
  },
  voteStyle: {
    fontFamily: 'montserrat-regular',
    color: '$blackColor',
    fontSize: 18
  },
  titleStyle: {
    fontFamily: 'montserrat-bold',
    color: '#fff',
    fontSize: 16,
    textAlign: 'left'
  },
  overviewStyle: {
    fontFamily: 'montserrat-regular',
    color: '$grayColor',
    fontSize: 13,
    textAlign: 'left'
  },
  buttonStyle: {
    borderWidth: 3,
    borderColor: '$redColor',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    // width: '30%',
    paddingHorizontal: 40,
    paddingVertical: 2
  },
  buttonTextStyle: {
    fontFamily: 'montserrat-regular',
    color: '$redColor',
    fontSize: 20
  },
  posterContainer: {
    flex: 0.3,
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  posterWrapper: {
    flex: 1,
  },
  poster: { flex: 1, height: null, width: null },
});

export default InfoModal;
