import React, {useState, useEffect} from 'react';
import {View, Pressable, Text, ScrollView} from 'react-native';
import styles from './styles';
import CartItem from '../UsableComponents/CartItem/CartItem';
import axios from 'axios';

const Cart = ({navigation}) => {
  const [carts, setCart] = useState('');
  const [removed, setRemoved] = useState(false);
  const [total, setTotal] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const getData = async () => {
      axios
        .get(`http://10.0.2.2:3000/cart`)
        .then((res) => {
          setCart(res.data);
          setPrice();
          setTotal(res.data);

          calculateTotal();
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  const removeByAttr = (arr, attr, value) => {
    var i = arr.length;
    while (i--) {
      if (
        arr[i] &&
        arr[i].hasOwnProperty(attr) &&
        arguments.length > 2 &&
        arr[i][attr] === value
      ) {
        arr.splice(i, 1);
      }
    }
    return arr;
  };

  const calculateTotal = async () => {
    let result = total.map((total) => total.price * total.qty);
    console.log(`result1:`, result);
    let result2 = result.reduce((a, b) => a + b, 0);
    console.log(`result1:`, result2);

    setPrice(result2);
    console.log(price);
    return result2;
  };

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
                  price={cart.price * cart.qty}
                  qty={cart.qty}
                  onPress={() => {
                    const deleteData = async () => {
                      axios.delete(`http://10.0.2.2:3000/cart/remove`, {
                        data: {id: cart.id},
                      });
                    };
                    deleteData();
                    const result = removeByAttr(carts, 'id', cart.id);

                    setCart([...result]); // [{}] carts, [{}] result
                    setPrice(price, {calculateTotal});
                  }}
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
        <Text style={styles.price}>
          {total.length > 0 ? (
            carts
              .map((cart) => cart.price * cart.qty)
              .reduce((a, b) => a + b, 0)
          ) : (
            <View></View>
          )}
        </Text>
        <Pressable
          style={styles.pressableCheckout}
          onPress={() => {
            navigation.navigate('Address');
            axios.post('http://10.0.2.2:3000/cart/total', {
              total: carts
                .map((cart) => cart.price * cart.qty)
                .reduce((a, b) => a + b, 0),
            });
          }}>
          <Text style={styles.checkout}>Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;
