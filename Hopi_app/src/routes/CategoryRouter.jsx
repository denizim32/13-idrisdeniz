import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CategoryScreen from '../screens/CategoryScreen';
import BrandScreen from '../screens/BrandScreen';

const Tab = createMaterialTopTabNavigator();

const CategoryRouter = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarIndicatorStyle: {
          borderBottomColor: '#000',
          borderBottomWidth: 2,
        },
      }}
    >
      <Tab.Screen name="Teklifler" component={CategoryScreen} />
      <Tab.Screen name="Markalar" component={BrandScreen} />
    </Tab.Navigator>
  );
};

export default CategoryRouter;
