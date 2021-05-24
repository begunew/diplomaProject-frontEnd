import React, {useState, useEffect} from 'react';
import {View, Pressable, Text, ScrollView} from 'react-native';
import styles from './styles';
import CartItem from '../UsableComponents/CartItem/CartItem';
import axios from 'axios';

const Cart = ({navigation}) => {
  const [carts, setCart] = useState('');
  useEffect(() => {
    const getData = async () => {
      axios
        .get(`http://10.0.2.2:3000/cart`)
        .then((res) => {
          setCart(res.data);
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.scrollContainer}>
          <View style={styles.saleContainer}>
            <Text style={styles.saleTitle}>Delivery is 100% FREE!</Text>
          </View>
          {carts.length > 0 ? (
            carts.map((cart) => (
              <View style={styles.cartItemContainer} key={cart.id}>
                <CartItem
                  price={cart.price}
                  qty={cart.qty}
                  name={cart.cartItemName}
                  image={cart.image}
                  id={cart.id}
                  key={cart.id}
                />
              </View>
            ))
          ) : (
            <View></View>
          )}

          <View style={{marginBottom: 100}} />
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.subtotal}>Subtotal</Text>
        <Text style={styles.price}>45,000₮</Text>
        <Pressable
          style={styles.pressableCheckout}
          onPress={() => {
            navigation.navigate('Paypal');
          }}>
          <Text style={styles.checkout}>Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;
