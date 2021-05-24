import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './styles';
const CategoryItem = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
      <Image style={styles.image} source={props.image} />
    </View>
  );
};

export default CategoryItem;
