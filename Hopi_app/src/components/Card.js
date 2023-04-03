import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Card = ({ title, img }) => {
  return (
    <TouchableOpacity className="bg-gray-200 mt-2">
      <View className="flex-row justify-between w-[200] h-[130]">
        <Text className="font-semibold text-xl self-end pl-4 pb-4 max-w-[102]">
          {title}
        </Text>
        <Image className="flex-[1] w-full h-full bg-cover" source={img} />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
