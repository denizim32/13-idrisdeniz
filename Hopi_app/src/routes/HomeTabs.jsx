import { View, Text, Image } from 'react-native';
import React, { useContext } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import ShopScreen from '../screens/ShopScreen';
import { DataContext } from '../context/DataProvider';

const Tab = createMaterialTopTabNavigator();

const HomeTabs = () => {
  const { welcomeScreenData } = useContext(DataContext);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarShowIcon: true,
        tabBarContentContainerStyle: { paddingTop: 8, paddingBottom: 8 },
        tabBarIndicatorStyle: {
          borderBottomColor: '#AA4578',
          borderBottomWidth: 2,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  height: '160%',
                  width: '160%',
                }}
                source={{
                  uri: welcomeScreenData[2] && welcomeScreenData[2].icon,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  height: '150%',
                  width: '300%',
                }}
                source={{
                  uri: welcomeScreenData[0] && welcomeScreenData[0].icon,
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
