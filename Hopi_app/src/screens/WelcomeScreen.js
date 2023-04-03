import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationCard from '../components/NavigationCard';
import { DataContext } from '../context/DataProvider';
import { AuthContext } from '../context/AuthProvider';

const WelcomeScreen = ({ navigation }) => {
  const { welcomeScreenData } = useContext(DataContext);
  const { name } = useContext(AuthContext);

  
  if (!welcomeScreenData) return;

  return (
    <SafeAreaView>
      <View className="items-center mt-[8%] mx-1">
        <Text className="font-bold text-3xl">Hoş Geldin {name}</Text>
        <Text className="mt-3">Hopinle ne yapmak istersin?</Text>

        <ScrollView className="w-full h-full mt-4 px-2">
          <NavigationCard
            icon={welcomeScreenData[2] && welcomeScreenData[2].icon}
            text={welcomeScreenData[2] && welcomeScreenData[2].text}
            screenshot={welcomeScreenData[2] && welcomeScreenData[2].screenshot}
            handleNavigation={() => navigation.navigate('TabRouter')}
          />
          <NavigationCard
            icon={welcomeScreenData[0] && welcomeScreenData[0].icon}
            text={welcomeScreenData[0] && welcomeScreenData[0].text}
            screenshot={welcomeScreenData[0] && welcomeScreenData[0].screenshot}
            handleNavigation={() =>
              navigation.navigate('TabRouter', {
                screen: 'Home',
                params: { screen: 'Shop' },
              })
            }
          />
          <NavigationCard
            icon={welcomeScreenData[1] && welcomeScreenData[1].icon}
            text={welcomeScreenData[1] && welcomeScreenData[1].text}
            screenshot={welcomeScreenData[1] && welcomeScreenData[1].screenshot}
            handleNavigation={() =>
              navigation.navigate('TabRouter', { screen: 'Wallet' })
            }
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});

// onPress={() => navigation.navigate('TabRouter')}
