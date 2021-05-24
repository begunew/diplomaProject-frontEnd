import React from 'react';
import {View, Image, Pressable, Text} from 'react-native';
import styles from './styles';

const CartIcon = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/shopping-cart-solid.png')}
      />
    </View>
  );
};

export default CartIcon;
