import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { AntDesign } from '@expo/vector-icons';

const NavigationCard = ({ icon, text, screenshot, handleNavigation }) => {
  return (
    <TouchableOpacity
      className="p-4 rounded-xl border-2 border-gray-200 bg-gray-50 shadow-xl shadow-gray-500 flex-row space-x-3 mb-2"
      onPress={handleNavigation}
    >
      <View className="h-36 w-full justify-start items-start flex-[2]">
        <Image
          className="h-20 w-20 "
          resizeMode="contain"
          source={{
            uri: icon,
          }}
        />
        <Text>{text}</Text>
      </View>
      <View className="flex-[1] mr-3 justify-end">
        <Image
          className="h-36 w-50 mb-[-6px]"
          resizeMode="contain"
          source={{
            uri: screenshot,
          }}
        />

        <AntDesign
          style={{ position: 'absolute', top: '50%', right: -25 }}
          name="arrowright"
          size={24}
          color="gray"
        />
      </View>
    </TouchableOpacity>
  );
};

export default NavigationCard;

const styles = StyleSheet.create({});
