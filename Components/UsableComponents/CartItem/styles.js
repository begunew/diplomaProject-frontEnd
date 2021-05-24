import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  pressableContainer: {
    backgroundColor: 'yellow',
    width: 380,
    height: 180,
    alignContent: 'center',
    top: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#4FADD8',
    zIndex: 0,
  },

  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 8,
    left: 15,
    backgroundColor: 'white',
  },
  image: {
    width: 100,
    alignSelf: 'center',
    height: 100,
    top: 10,
  },
  textContainer: {
    position: 'absolute',
    left: 145,
    height: 120,
    width: 200,
    top: 15,
  },
  itemTitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 23,
    bottom: 10,
  },
  itemPrice: {fontWeight: 'bold', color: 'black', fontSize: 20, bottom: 10},
  itemQuantity: {fontWeight: 'bold', color: 'black', fontSize: 20, bottom: 10},
  X: {
    fontWeight: 'bold',
    position: 'absolute',
    backgroundColor: 'gray',
    borderRadius: 500,

    height: 35,
    width: 35,

    zIndex: 3,
    fontSize: 25,
    textAlign: 'center',
  },
  pressableX: {
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    left: 340,
    top: 100,
    zIndex: 2,
    position: 'absolute',
  },
});

export default styles;
