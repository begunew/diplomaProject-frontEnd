import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const CustomButton = (props) => {
  return (
    <View style={styles.buttonView}>
      <Pressable style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.name}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;
