import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '$blackColor'
  },
  list: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: '1%'
  },
});

export default styles;
