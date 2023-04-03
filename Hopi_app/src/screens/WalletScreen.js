import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const WalletScreen = () => {
  return (
    <View className="mt-5 items-center">
      <Text className="font-thin">Toplam Paracık</Text>
      <Text className="text-yellow-500 text-4xl font-extrabold mt-4">
        201,50
      </Text>

      <View className=" w-full mt-5 flex-row justify-around text-center">
        <View className="justify-center items-center border-b-2 border-black flex-1 pb-3">
          <Text className="font-bold">1,50</Text>
          <Text className="font-bold">Paracık</Text>
          <MaterialIcons
            name="arrow-drop-down"
            size={48}
            color="black"
            style={{ position: 'absolute', bottom: -35 }}
          />
        </View>
        <View className="justify-center items-center flex-1 border-b-2 border-gray-400 pb-3">
          <Text className="font-light">200,00</Text>
          <Text className="font-light">Hediye Paracık</Text>
        </View>
        <View className="justify-center items-center flex-1 border-b-2 border-gray-400 pb-3">
          <Text className="font-light">0,00</Text>
          <Text className="font-light">Akaryakıt Paracık</Text>
        </View>
      </View>

      <Text className="mt-10 items-center px-5 text-center">
        Hopi ile anlaşmalı tüm markalarda minimum 1,50 TL değerinde
        harcayabilirsin
      </Text>

      <TouchableOpacity className="mt-7 flex-row justify-between px-4 py-4 bg-[#f59324] text-center items-center w-5/6 rounded-xl">
        <EvilIcons name="arrow-right" size={24} color="white" />
        <Text className="text-lg font-bold text-white">Paracık Gönder</Text>
        <FontAwesome5 name="arrow-right" size={12} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default WalletScreen;
