import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import ShopScreen from '../screens/ShopScreen';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabs from './HomeTabs';
import SearchRouter from './SearchRouter';

const Stack = createStackNavigator();

const HomeRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeTabs"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarShowIcon: true,
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="HomeSearch" component={SearchRouter} />
    </Stack.Navigator>
  );
};

export default HomeRouter;

const styles = StyleSheet.create({});
