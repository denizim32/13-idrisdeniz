import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import WalletScreen from '../screens/WalletScreen';
import Wallet2Screen from '../screens/Wallet2Screen';
import Wallet3Screen from '../screens/Wallet3Screen';

const Tab = createMaterialTopTabNavigator();

const WalletRouter = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarIndicatorStyle: {
          borderBottomColor: '#000',
          borderBottomWidth: 2,

          borderRightColor: '#000',
          borderRightWidth: 1,
        },
      }}
    >
      <Tab.Screen name="Paracık Bakiye" component={WalletScreen} />
      <Tab.Screen name="TL Bakiye" component={Wallet2Screen} />
      <Tab.Screen name="Kartlarım" component={Wallet3Screen} />
    </Tab.Navigator>
  );
};

export default WalletRouter;
