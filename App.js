import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './Components/Main/Main';
import Dog from './Components/Dog/Dog';
import Cat from './Components/Cat/Cat';
import SplashScreen from 'react-native-splash-screen';
import Cart from './Components/Cart/Cart';
import ItemTransition from './Components/ItemTransition/ItemTransition';
import AddressInfo from './Components/AddressInfo/AddressInfo';
import Paypal from './Components/Paypal/Paypal';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    let isMounted = true;
    SplashScreen.hide();

    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            options={{headerShown: false}}
            name="SplashScreen"
            component={SplashScreen}
          /> */}
          <Stack.Screen
            name="Main"
            options={{
              headerShown: false,
            }}
            component={Main}
          />
          <Stack.Screen
            name="The Dog Shop"
            options={{
              headerStyle: {backgroundColor: '#06688F'},
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            component={Dog}
          />
          <Stack.Screen
            name="The Cat Shop"
            options={{
              headerStyle: {backgroundColor: '#06688F'},
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            component={Cat}
          />
          <Stack.Screen
            name="Cart"
            options={{
              headerStyle: {backgroundColor: '#06688F'},
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            component={Cart}
          />
          <Stack.Screen
            name="Item Transition"
            options={({route}) => ({
              title: route.params.title,
              headerStyle: {backgroundColor: '#06688F'},
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            })}
            component={ItemTransition}
          />
          <Stack.Screen
            name="Address"
            options={{
              headerStyle: {backgroundColor: '#06688F'},
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            component={AddressInfo}
          />
          <Stack.Screen
            name="Paypal"
            options={{
              headerStyle: {backgroundColor: '#06688F'},
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            component={Paypal}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Test /> */}
    </>
  );
};

export default App;
