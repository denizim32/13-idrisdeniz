import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProductsScreen from '../screens/ProductsScreen';
import OffersScreen from '../screens/OffersScreen';

const Tab = createMaterialTopTabNavigator();

const SearchRouter = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Offers" component={OffersScreen} />
    </Tab.Navigator>
  );
};

export default SearchRouter;
