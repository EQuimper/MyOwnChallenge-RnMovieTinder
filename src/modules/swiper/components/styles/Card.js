import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
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
  poster: {
    flex: 1,
    height: null,
    width: null,
    borderRadius: 10
  }
});

export default styles;
