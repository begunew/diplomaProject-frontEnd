import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

const SaleComponent = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.image} />
      <Text style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        {'\n'}
        <Text>{props.percentage} Off Now</Text> {'\n'}
        <Text style={styles.date}>{props.date}</Text>
      </Text>
    </View>
  );
};

export default SaleComponent;
