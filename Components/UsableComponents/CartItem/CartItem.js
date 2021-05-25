import axios from 'axios';
import React from 'react';
import {View, Pressable, Image, Text} from 'react-native';
import styles from './styles';

const CartItem = (props) => {
  return (
    <View>
      <Pressable style={styles.pressableX} onPress={props.onPress}>
        <Text style={styles.X}>x</Text>
      </Pressable>
      <Pressable style={styles.pressableContainer}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: props.image}} />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.itemTitle}>{props.name} </Text>
            <Text style={styles.itemQuantity}>Quantity: {props.qty} </Text>
            <Text style={styles.itemPrice}>Price: {props.price + '₮'}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default CartItem;
