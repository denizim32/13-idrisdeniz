import {
  Button,
  FlatList,
  Image,
  Linking,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import Card from '../components/Card';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import { AuthContext } from '../context/AuthProvider';

import * as WebBrowser from 'expo-web-browser';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const HomeScreen = ({ navigation }) => {
  const { name } = useContext(AuthContext);
  const { sliderData } = useContext(DataContext);

  console.log(sliderData);

  return (
    <ScrollView>
      {/* Searchbar */}
      <View className="bg-white py-2 px-4 flex-row items-center space-x-2">
        <View className="flex-row items-center bg-gray-200 space-x-3  p-1 flex-[1] rounded-xl">
          <Entypo name="magnifying-glass" size={24} color="gray" />
          <TextInput
            className="bg-gray-200 grow-[1]"
            placeholder="Marka veya Kampanya ara"
            onSubmitEditing={() =>
              navigation.navigate('Home', {
                screen: 'HomeSearch',
              })
            }
          />
        </View>
        <Entypo name="camera" size={24} color="#00adef" />
      </View>
      {/* info */}
      <View className="flex-row gap-2 mx-2 mt-1 ">
        <View className="bg-white p-4 pt-3 pr-7 rounded-lg">
          <Ionicons name="sunny" size={24} color="#d6c576" />
          <Text className="font-bold">Merhaba</Text>
          <Text className="font-bold">{name}</Text>
        </View>

        <View className="bg-white p-1 gap-2 rounded-lg justify-between flex-1">
          <Text className="text-yellow-500 font-bold text-base">
            201.50 Paracık'ın var.
          </Text>
          <Text className="text-xs">
            1 Paracık=1TL değerinde kullanabilirsin
          </Text>
          <TouchableOpacity>
            <Text className="underline text-sm">Paracıklarıma Git</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* slider */}
      <View>
        <Text className="ml-4 mt-1 mb-1 font-bold text-xl">Teklifi incele</Text>

        <Carousel
          data={DATA}
          renderItem={() => {
            return (
              <View
                style={{
                  width: 360,
                  height: 210,
                }}
              >
                <Image
                  style={{ flex: 1, width: null, borderRadius: 10 }}
                  source={{ uri: sliderData[0].img }}
                />
              </View>
            );
          }}
          sliderWidth={400}
          itemWidth={350}
          layout={'default'}
          loop={true}
        />
      </View>

      {/* banners */}
      <View className="items-center gap-1 mt-2">
        <TouchableOpacity
          onPress={() => WebBrowser.openBrowserAsync('https://expo.dev')}
        >
          <Image
            style={{
              width: 365,
              height: 100,
            }}
            source={require('../../assets/banner1.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{
              width: 365,
              height: 100,
            }}
            source={require('../../assets/banner2.png')}
          />
        </TouchableOpacity>
      </View>

      {/* categories */}
      <View className="mx-4 mt-4">
        <Text className="font-bold text-xl">Sevebileceğin Kategoriler</Text>
        <View className="flex-row justify-between mt-2">
          <Card
            title="Giyim"
            img={require('../../assets/categories/jeans.png')}
          />
          <Card
            title="Spor"
            img={require('../../assets/categories/sport.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
