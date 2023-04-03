import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';

const Wallet3Screen = () => {
  return (
    <ScrollView className="mt-4 mx-3 h-full">
      <View className="justify-center items-center">
        <Image
          className="scale-75"
          source={require('../../assets/creditCard.png')}
        />
      </View>

      <Text className="font-bold text-lg">Kredi / banka kartlarım</Text>

      <Text>
        Masterpass'e kartların kaydet, alışverini Hopi mobil ödeme ile kolayca
        yap
      </Text>

      <View className="border-dashed border-2 border-cyan-600 py-3 px-5 items-center mt-6">
        <Text className="text-cyan-600">Masterpass hesabını ilişkilendir</Text>
      </View>

      <Text className="font-bold text-lg mt-6">Ulaşım Kartlarım</Text>

      <Text>
        İstanbulkartını kaydederek kartlarına Paracık ile yükleme yapabilirsin
      </Text>

      <View className="border-dashed border-2 border-cyan-600 py-3 px-5 items-center mt-6">
        <Text className="text-cyan-600">İstanbulkart Ekle</Text>
      </View>
    </ScrollView>
  );
};

export default Wallet3Screen;
