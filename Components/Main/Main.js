import React from 'react';
import {View, Image, Pressable, Text, ScrollView} from 'react-native';

import styles from './styles';
import Logo from '../UsableComponents/Logo/Logo';
import CategoryItem from '../UsableComponents/CategoryItem/CategoryItem';
import SaleComponent from '../UsableComponents/SaleComponent/SaleComponent';
import CartIcon from '../UsableComponents/CartIcon/CartIcon';
import Cart from '../Cart/Cart';

const Main = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Logo />

        <Pressable
          style={styles.pressableCart}
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <CartIcon />
        </Pressable>

        <Text style={styles.textSale}>
          <Text style={styles.textSaleOrange}>Save 30%</Text> on your first
          delivery
        </Text>

        <Pressable
          style={styles.pressableDogSale}
          onPress={() => {
            navigation.navigate('The Dog Shop');
          }}>
          <SaleComponent
            title="Dog Food"
            percentage="30%"
            date="until August 30th"
            image={require('../../assets/images/30percent.jpg')}
          />
        </Pressable>

        <Text style={styles.textCategory}>Shop by Category</Text>
        <View>
          <Pressable
            style={styles.pressableCat}
            onPress={() => {
              navigation.navigate('The Cat Shop');
            }}>
            <CategoryItem
              name="Cat"
              image={require('../../assets/images/rae.jpg')}
            />
          </Pressable>

          <Pressable
            style={styles.pressableDog}
            onPress={() => {
              navigation.navigate('The Dog Shop');
            }}>
            <CategoryItem
              name="Dog"
              image={require('../../assets/images/dog-toy.jpg')}
            />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;
