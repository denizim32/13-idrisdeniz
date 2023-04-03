import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountScreen = ({ navigation }) => {
  const handleLogout = () => {
    signOut(auth).then((user) => {
      console.log('user logout');
    });
  };

  return (
    <View className="mt-5 px-4">
      <View className="flex-row items-center space-x-3 border-b-2 border-gray-300 pb-5">
        <FontAwesome name="user-circle-o" size={48} color="black" />
        <Text className="font-bold text-xl">Kek Börek</Text>
        <Feather name="edit-3" size={16} color="black" />
      </View>

      <TouchableOpacity className="flex-row p-3 space-x-3 items-center border-b-2 border-gray-300 ">
        <FontAwesome name="bell" size={24} color="black" />
        <Text className="font-normal">Bildirimlerim</Text>
        <MaterialIcons
          name="arrow-forward-ios"
          size={16}
          color="black"
          style={{ position: 'absolute', right: 15 }}
        />
      </TouchableOpacity>
      <TouchableOpacity className="flex-row p-3 space-x-3 items-center border-b-2 border-gray-300 ">
        <FontAwesome name="star" size={24} color="black" />
        <Text className="font-normal">Listelerim</Text>
        <MaterialIcons
          name="arrow-forward-ios"
          size={16}
          color="black"
          style={{ position: 'absolute', right: 15 }}
        />
      </TouchableOpacity>
      <TouchableOpacity className="flex-row p-3 space-x-3 items-center border-b-2 border-gray-300 ">
        <Ionicons name="call" size={24} color="black" />
        <Text className="font-normal">Müşteri Hizmetleri</Text>
        <MaterialIcons
          name="arrow-forward-ios"
          size={16}
          color="black"
          style={{ position: 'absolute', right: 15 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-[#cc232b] items-center py-2 px-8 rounded-lg mt-5"
        onPress={handleLogout}
      >
        <Text className="text-white text-bold text-lg">Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountScreen;
