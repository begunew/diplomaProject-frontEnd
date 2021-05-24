import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LatoBlack = (props) => {
  return <Text style={styles.fontFamily}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  fontFamily: {
    fontFamily: 'Lato-Black',
  },
});

export default LatoBlack;
