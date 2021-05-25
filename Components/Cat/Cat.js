import React, {useState, useEffect} from 'react';
import {View, Pressable, Text, ScrollView} from 'react-native';
import styles from './styles';
import ShopItem from '../UsableComponents/ShopItem/ShopItem';
import axios from 'axios';
const Cat = ({navigation}) => {
  const [products, setProducts] = useState('');
  useEffect(() => {
    const getData = async () => {
      axios
        .get(`http://10.0.2.2:3000/products/cat`)
        .then((res) => {
          if (res.status === 200 && res != null) {
            setProducts(res.data);
          } else {
            throw new Error('Empty Data');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  let productsMap =
    products.length > 0 ? (
      products.map((product) => (
        <Pressable
          key={product._id}
          onPress={() => {
            console.log(product._id);
            navigation.navigate('Item Transition', {
              cartItemName: product.name,
              price: product.price,
              image: product.image,
              title: product.name,
              id: product._id,
            });
          }}>
          <ShopItem
            itemName={product.name}
            itemPrice={product.price + '₮'}
            itemImage={product.image}
          />
        </Pressable>
      ))
    ) : (
      <Text>Empty</Text>
    );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titleBrand}>Whiskas</Text>
        <View style={styles.shopItemContainer}>{productsMap}</View>
      </View>
    </ScrollView>
  );
};

export default Cat;
