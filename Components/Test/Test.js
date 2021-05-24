import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../UsableComponents/CustomButton/CustomButton';
import axios from 'axios';

const Test = () => {
  const [data, setData] = useState('');

  const getData = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:3000/data');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <View style={{alignSelf: 'center', width: 300, marginLeft: 60}}>
        <CustomButton name="Get Data" onPress={getData} />
      </View>

      <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>
        {data}
      </Text>
    </View>
  );
};

export default Test;
