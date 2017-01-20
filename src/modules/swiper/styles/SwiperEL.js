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
  yupStyle: {
    borderColor: '$blueColor',
    borderWidth: 2,
    position: 'absolute',
    padding: 20,
    top: '25%',
    borderRadius: 5,
    left: '25%',
  },
  nopeStyle: {
    borderColor: '$redColor',
    borderWidth: 2,
    position: 'absolute',
    padding: 20,
    top: '25%',
    borderRadius: 5,
    left: '25%',
  },
  nopeTextStyle: {
    color: '$redColor'
  },
  yupTextStyle: {
    color: '$blueColor'
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
