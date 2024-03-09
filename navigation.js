import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import PharmacyScreen from './screens/PharmacyScreen';
import CartScreen from './screens/CartScreen';
import MapScren from './screens/MapScren';
import Welcome from './screens/Welcome';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import CheckOutScreen from './screens/CheckoutScreen';
import SearchFilterScreen from './screens/SearchFilter';
import ProductsScreen from './screens/ProductsScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pharmacy" component={PharmacyScreen} />
        <Stack.Screen name="Product" component={ProductsScreen} />
        <Stack.Screen
          name="Cart"
          options={{ presentation: "modal" }}
          component={CartScreen}
        />
        <Stack.Screen
          name="Map"
          options={{ presentation: "modal" }}
          component={MapScren}
        />
        <Stack.Screen
          name="Checkout"
          options={{ presentation: "modal" }}
          component={CheckOutScreen}
        />
        <Stack.Screen
          name="SearchFilter"
          options={{ presentation: "modal" }}
          component={SearchFilterScreen}
        />

        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SingUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}