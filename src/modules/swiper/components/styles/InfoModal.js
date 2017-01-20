import EStyleSheet from 'react-native-extended-stylesheet';


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
    position: 'relative'
  },
  container: {
    backgroundColor: '#fff',
    height: '75%',
    width: '75%',
    borderRadius: 6
  },
  titleContainer: {
    backgroundColor: 'transparent',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '2%',
    flex: 0.4
  },
  overviewContainer: {
    backgroundColor: 'transparent',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '2%',
    flex: 1,
  },
  overviewStyle: {
    fontFamily: 'montserrat-regular',
    color: '$grayColor',
    fontSize: 13,
    textAlign: 'left'
  },
  titleStyle: {
    fontFamily: 'montserrat-bold',
    color: '#fff',
    fontSize: 16,
    textAlign: 'left'
  },
  poster: {
    flex: 1,
    height: null,
    width: null,
  }
});

export default styles;
