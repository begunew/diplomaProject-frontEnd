import React, {useState, useEffect} from 'react';
import {View, Pressable, Text, ScrollView} from 'react-native';
import styles from './styles';
import ShopItem from '../UsableComponents/ShopItem/ShopItem';
import CustomButton from '../UsableComponents/CustomButton/CustomButton';
import axios from 'axios';

const ItemTransition = ({route, navigation}) => {
  const [products, setProducts] = useState('');
  const {cartItemName, price, image, id} = route.params;
  const qty = 1;
  const handleButton = () => {
    axios
      .post(`http://10.0.2.2:3000/cart/addToCart/`, {
        id,
        qty,
        price,
        image,
        cartItemName,
      })
      .then((res) => {
        console.log('Response: ', res.data);
        navigation.navigate('Cart', {id, qty, price});
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <ShopItem
          itemName={cartItemName}
          itemPrice={price + '₮'}
          itemImage={image}
        />
        <View style={{left: 45, top: 250, width: 400}}>
          <CustomButton onPress={handleButton} name="Add to Cart" />
        </View>
      </View>
    </ScrollView>
  );
};

export default ItemTransition;
