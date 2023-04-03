import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const QRScreen = () => {
  return (
    <View className="w-full h-full items-center justify-center">
      <Text className="text-red-700">55 Saniye</Text>
      <Text className="">içinde QR kodun yenilenecek!</Text>
      <Image className="mt-4" source={require('../../assets/qrcode.png')} />

      <TouchableOpacity className="flex-row mt-4 items-center justify-around w-2/3">
        <Text className="text-3xl font-bold">4507 7627 27</Text>
        <FontAwesome5 name="copy" size={24} color="black" />
      </TouchableOpacity>

      <Text className="w-2/3 mt-2 text-center">
        QR kodu <Text className="font-bold">kasada okutarak</Text> veya internet
        alışverişlerinde{' '}
        <Text className="font-bold">altındaki kodu yazarak</Text> tekliflerden
        faydalanabilirsin
      </Text>

      <TouchableOpacity className="bg-[#00adef] flex-row w-2/3 mt-4 rounded-3xl p-2 px-5 justify-between text-center items-center">
        <AntDesign name="camera" size={24} color="white" />
        <Text className="text-white">QR Okut</Text>
        <Ionicons name="md-arrow-up-circle-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default QRScreen;
