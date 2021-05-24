import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Pressable} from 'react-native';
import axios from 'axios';
import {WebView} from 'react-native-webview';

const Paypal = () => {
  const [approved, setApproved] = useState(false);

  if (approved) {
    return <Text>LOL</Text>;
  }
  const renderLoading = () => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        height: '100%',
        width: '100%',
      }}>
      <ActivityIndicator color={'#06688F'} size="large" />
    </View>
  );
  return (
    <WebView
      renderLoading={renderLoading}
      startInLoadingState={true}
      source={{uri: `http://10.0.2.2:3000/paypal`}}></WebView>
  );
};

export default Paypal;
