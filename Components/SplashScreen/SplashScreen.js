import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';
import LatoBlack from '../../ComponentsStyles/LatoBlack';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setInterval(() => {
      navigation.navigate('Main');
    }, 10000);
  });
  return (
    <>
      <View style={styles.container}>
        <LatoBlack>
          <Text style={styles.logoText}>UB Pet</Text>
        </LatoBlack>
        <LatoBlack>
          <Text style={styles.logoText}>Store</Text>
        </LatoBlack>
        <Image
          style={styles.logo}
          source={require('../../assets/images/cat-by-himself.png')}
        />
      </View>
    </>
  );
};

export default SplashScreen;
