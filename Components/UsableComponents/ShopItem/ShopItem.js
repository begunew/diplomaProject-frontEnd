import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

const ShopItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: props.itemImage}} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.itemTitle}>{props.itemName}</Text>
        <Text style={styles.itemPrice}>{props.itemPrice}</Text>
      </View>
    </View>
  );
};

export default ShopItem;
