import { View, Text, Image } from 'react-native';
import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';

const Wallet2Screen = () => {
  return (
    <View className="mt-4 mx-3 h-full">
      <Image className="w-full" source={require('../../assets/hopiCard.png')} />

      <Text className="mt-5">
        Hopipay kart içine kolayca para yükleyerek istediğin her yerde harcama
        yapabildiğin ücretsiz bir sanal karttır. bu kartınla;
      </Text>

      <View className="flex-row space-x-3 text-center items-center mt-4">
        <Ionicons name="checkmark-circle" size={24} color="lightskyblue" />
        <Text className="text-xs">
          Hopi ile anlaşmalı markalarda paranı kat kat harcayabilirsin
        </Text>
      </View>
      <View className="flex-row space-x-3 text-center items-center mt-4">
        <Ionicons name="checkmark-circle" size={24} color="lightskyblue" />
        <Text className="text-xs">
          Arkadaşlarına anında para gönderebilirsin
        </Text>
      </View>
      <View className="flex-row space-x-3 text-center items-center mt-4">
        <Ionicons name="checkmark-circle" size={24} color="lightskyblue" />
        <Text className="text-xs">
          Tüm e-ticaret sitelerinde kolayca alışveriş yapabilirsin
        </Text>
      </View>

      <LinearGradient
        colors={['#14a0cc', '#14a0cc', '#14a0cc', '#35b15a']}
        start={{ x: 0, y: 1 }}
        style={{
          padding: 6,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          width: '100%',
        }}
      >
        <Text className="text-white text-lg font-bold">
          HOPİPAY KARTINI AKTİVE ET
        </Text>
      </LinearGradient>
    </View>
  );
};

export default Wallet2Screen;
