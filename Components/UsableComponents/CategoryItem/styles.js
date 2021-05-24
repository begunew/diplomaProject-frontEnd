import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 235,
    height: 200,
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
    color: '#4FADD8',
    fontFamily: 'Lato-Black',
    position: 'absolute',
    top: 140,
    left: 160,
    zIndex: 2,
    backgroundColor: '#433B56',
    borderRadius: 100,
    padding: 10,
    height: 55,
  },
});

export default styles;
