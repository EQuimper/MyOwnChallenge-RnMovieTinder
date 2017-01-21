import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '$blackColor',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '2%'
  },
  titleContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5
  },
  yupAndNopeStyle: {
    position: 'absolute',
    top: '25%',
    left: '20%',
  },
  nopeTextStyle: {
    color: '$redColor',
    fontFamily: 'montserrat-bold',
    fontSize: 75,
  },
  yupTextStyle: {
    color: '$blueColor',
    fontFamily: 'montserrat-bold',
    fontSize: 75
  },
  titleStyle: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'montserrat-regular'
  },
  swiperContainer: {
    flex: 1,
    backgroundColor: '$blackColor'
  }
});

export default styles;
