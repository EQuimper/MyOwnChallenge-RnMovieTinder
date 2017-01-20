import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 0.5,
    justifyContent: 'space-around',
    width: '80%',
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

export default styles;
