import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#06688F',
    height: 604,
  },
  pressable: {
    width: 45,
    position: 'absolute',
    height: 45,
    top: 30,
    left: 330,
  },
  titleBrand: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    top: 20,
    left: 20,
  },
  shopItemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    top: 30,
  },
  titleBrandTwo: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    top: 100,
    left: 20,
  },
  shopItemContainerTwo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    top: 120,
  },
});

export default styles;
