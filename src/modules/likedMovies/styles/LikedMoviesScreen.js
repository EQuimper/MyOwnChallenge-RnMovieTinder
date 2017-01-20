import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '$blackColor'
  },
  movieContainer: {
    flex: 1,
  },
  movieImageContainer: {
    height: '35%',
    width: '45%',
    marginHorizontal: '1.5%',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
    shadowOpacity: 0.8
  },
  movieImage: {
    flex: 1,
    width: null,
    height: null
  },
  deleteButton: {
    marginTop: '1%',
    width: '45%',
    height: '7%',
    marginHorizontal: '1.5%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '$redColor'
  },
  deleteText: {
    fontFamily: 'montserrat-regular',
    color: '$redColor',
    fontSize: 16
  },
  getMeMovieContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  getMovieButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '$blueColor',
    padding: 40,
    flexDirection: 'row'
  },
  getMovieText: {
    fontFamily: 'montserrat-regular',
    color: '$blueColor',
    fontSize: 16
  }
});

export default styles;
