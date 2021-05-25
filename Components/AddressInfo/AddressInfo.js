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
        .then((res) => {
          console.log('Response: ', res.data);
          navigation.navigate('Paypal');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <View style={styles.container}>
      <View style={{marginTop: 20}}></View>
      <View style={styles.inputLine}>
        <Text style={styles.text}>Full Name</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setName}
        />
      </View>
      <View style={styles.inputLine}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          keyboardType={'email-address'}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputLine}>
        <Text style={styles.text}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phone}
          keyboardType={'numeric'}
          onChangeText={setPhone}
        />
      </View>
      <View style={styles.inputLine}>
        <Text style={styles.text}>Address</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
        />
      </View>
      <View style={styles.inputLine}>
        <Text style={styles.text}>Additional Details</Text>
        <TextInput
          style={styles.input}
          value={details}
          onChangeText={setDetails}
        />
      </View>
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default AddressInfo;
