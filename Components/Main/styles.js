import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#06688F',
    width: '100%',
    height: 1100,
  },
  textCategory: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#DBD22A',
    top: 70,
    left: 30,
    backgroundColor: '#8F1B32',
    width: 260,
    padding: 8,
    borderRadius: 5,
  },
  textSale: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#8F1B32',
    padding: 5,
    color: '#4FADD8',
    width: '90%',
    left: '5%',
    bottom: 20,
    borderRadius: 5,
  },
  textSaleOrange: {
    color: '#4FADD8',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  pressableDogSale: {
    top: 30,
    width: '80%',
    left: '10%',
    borderRadius: 10,
  },
  pressableCart: {
    width: 45,
    position: 'absolute',
    height: 45,
    top: 30,
    left: 330,
  },
  pressableCat: {
    width: 235,
    height: 200,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    top: 120,
  },
  pressableDog: {
    width: 235,
    height: 200,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    top: 180,
  },
});

export default styles;
