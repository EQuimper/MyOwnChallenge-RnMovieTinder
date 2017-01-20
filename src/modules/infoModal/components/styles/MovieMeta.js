import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    zIndex: 1,
    backgroundColor: '$darkBlackColor'
  },
  metaContainer: {
    flex: 1,
    height: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    alignSelf: 'stretch'
  },
  metaStyle: {
    color: '$grayColor',
    fontFamily: 'montserrat-bold',
    fontSize: 18
  },
  ratingShowContainer: {
    backgroundColor: '$darkBlackColor',
    height: 300,
    paddingBottom: '24%',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  panelText: {
    color: '$grayColor',
    fontFamily: 'montserrat-regular',
    fontSize: 16
  },
});

export default styles;
