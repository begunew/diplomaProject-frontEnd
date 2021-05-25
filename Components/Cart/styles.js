import {StyleSheet, Dimensions, useWindowDimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06688F',
  },
  scrollContainer: {
    backgroundColor: '#06688F',
  },
  saleContainer: {
    backgroundColor: '#2AA9DB',
    top: 30,
    borderRadius: 5,
    height: 44,
    width: 260,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  saleTitle: {
    color: '#433B56',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {color: 'white'},
  cartItemContainer: {
    marginBottom: 20,
    top: -30,
  },
  footer: {
    backgroundColor: 'black',
    height: 80,
  },
  subtotal: {
    color: 'gray',
    left: 33,
    fontSize: 16,
    marginTop: 5,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    left: 30,
    top: -7,
  },
  checkout: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  pressableCheckout: {
    backgroundColor: 'yellow',
    position: 'absolute',
    left: 250,
    top: 7,
    backgroundColor: '#DBD22A',
    padding: 10,
    width: 150,
    borderRadius: 10,
  },
});

export default styles;
