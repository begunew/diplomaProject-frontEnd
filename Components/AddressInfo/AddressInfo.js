import React, {useState} from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import styles from './styles';
import axios from 'axios';

const AddressInfo = ({navigation}) => {
  const [fullName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = () => {
    if (!fullName || !email || !phone || !address || !details) {
      console.warn('One of the fields are empty.');
    } else {
      axios
        .post(`http://10.0.2.2:3000/cart/address`, {
          fullName,
          email,
          phone,
          address,
          details,
        })
        .then(navigation.navigate('Paypal'))
        .catch((err) => console.log(err));
    }
  };

  return (
    <View>
      <Text>Full Name</Text>
      <TextInput
        style={{height: 40, margin: 12, borderWidth: 1}}
        value={fullName}
        onChangeText={setName}
      />

      <Text>Email</Text>
      <TextInput
        style={{height: 40, margin: 12, borderWidth: 1}}
        value={email}
        onChangeText={setEmail}
      />

      <Text>Phone Number</Text>
      <TextInput
        style={{height: 40, margin: 12, borderWidth: 1}}
        value={phone}
        keyboardType={'numeric'}
        onChangeText={setPhone}
      />

      <Text>Address</Text>
      <TextInput
        style={{height: 40, margin: 12, borderWidth: 1}}
        value={address}
        onChangeText={setAddress}
      />

      <Text>Additional Details</Text>
      <TextInput
        style={{height: 40, margin: 12, borderWidth: 1}}
        value={details}
        onChangeText={setDetails}
      />
      <Pressable onPress={handleSubmit}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
};

export default AddressInfo;
