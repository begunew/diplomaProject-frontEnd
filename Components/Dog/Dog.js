import React, {useState, useEffect} from 'react';
import {
  View,
  Pressable,
  SafeAreaView,
  FlatList,
  Text,
  ScrollView,
} from 'react-native';
import styles from './styles';
import CartIcon from '../UsableComponents/CartIcon/CartIcon';
import ShopItem from '../UsableComponents/ShopItem/ShopItem';
import axios from 'axios';

const Dog = ({navigation}) => {
  const [products, setProducts] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`http://10.0.2.2:3000/products/dog`)
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
    fetchData();
  }, []);

  let productsMap =
    products.length > 0 ? (
      products.map((product) => (
        <Pressable
          key={product._id}
          onPress={() => {
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
            key={product._id}
          />
        </Pressable>
      ))
    ) : (
      <View></View>
    );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.titleBrand}>Pedigree</Text>
        <View style={styles.shopItemContainer}>{productsMap}</View>
      </View>
    </SafeAreaView>
  );
};

export default Dog;
