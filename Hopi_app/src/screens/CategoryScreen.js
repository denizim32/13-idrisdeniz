import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

import { AntDesign } from '@expo/vector-icons';
import Card from '../components/Card';

const CategoryScreen = () => {
  return (
    <ScrollView className=" bg-white w-full h-full">
      <TouchableOpacity className="flex-row py-2 mt-3 items-center border-y-2 border-y-gray-300 mx-4">
        <AntDesign name="tago" size={24} color="black" />
        <Text className="font-semibold text-center ml-2 just">
          Tüm Teklifleri Gör{' '}
        </Text>
        <AntDesign
          name="arrowright"
          size={24}
          color="black"
          style={{
            position: 'absolute',
            right: 0,
          }}
        />
      </TouchableOpacity>

      <View className="flex-row justify-around mt-2 flex-wrap ">
        <Card
          title="Giyim"
          img={require('../../assets/categories/jeans.png')}
        />

        <Card
          title="Ayakkabı"
          img={require('../../assets/categories/shoes.png')}
        />

        <Card title="Çanta" img={require('../../assets/categories/bag.png')} />

        <Card
          title="Aksesuar"
          img={require('../../assets/categories/accesiories.png')}
        />

        <Card title="Spor" img={require('../../assets/categories/sport.png')} />

        <Card title="Kitap" img={require('../../assets/categories/book.png')} />

        <Card
          title="Hizmet"
          img={require('../../assets/categories/service.png')}
        />

        <Card
          title="Yeme      & İçme"
          img={require('../../assets/categories/food.png')}
        />
      </View>
    </ScrollView>
  );
};

export default CategoryScreen;
