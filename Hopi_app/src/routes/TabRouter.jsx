import QRScreen from '../screens/QRScreen';
import AccountScreen from '../screens/AccountScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeRouter from './HomeRouter';
import CategoryRouter from './CategoryRouter';
import WalletRouter from './WalletRouter';

// Icons
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import HomeTabs from './HomeTabs';

const Tab = createBottomTabNavigator();

const TabRouter = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: true }}
    >
      <Tab.Screen
        name="Home"
        component={HomeRouter}
        options={{
          title: 'Ana Sayfa',
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo
              name="home"
              size={24}
              color={focused ? 'black' : '#8b8987'}
            />
          ),
          tabBarActiveTintColor: 'black',
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoryRouter}
        options={{
          title: 'Kategoriler',
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign
              name="appstore1"
              size={24}
              color={focused ? 'black' : '#8b8987'}
            />
          ),
          tabBarActiveTintColor: 'black',
        }}
      />
      <Tab.Screen
        name="QR"
        component={QRScreen}
        options={{
          title: 'Hopi QR Kodum',
          tabBarLabel: 'QR Kodum',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="qr-code-outline"
              size={24}
              color={focused ? 'black' : '#8b8987'}
            />
          ),
          tabBarActiveTintColor: 'black',
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletRouter}
        options={{
          title: 'Cüzdanım',
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo
              name="wallet"
              size={24}
              color={focused ? 'black' : '#8b8987'}
            />
          ),
          tabBarActiveTintColor: 'black',
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: 'Hesabım',
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome5
              name="user-alt"
              size={24}
              color={focused ? 'black' : '#8b8987'}
            />
          ),
          tabBarActiveTintColor: 'black',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRouter;
