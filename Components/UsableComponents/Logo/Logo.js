import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './styles';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>UB Pet</Text>
      <Text style={styles.logoText}>Store</Text>
      <Image
        style={styles.logoImage}
        source={require('../../../assets/images/cat-by-himself.png')}
      />
    </View>
  );
};

export default Logo;
