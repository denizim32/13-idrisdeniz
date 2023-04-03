import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth, db } from '../services/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { async } from '@firebase/util';
import { DataContext } from '../context/DataProvider';
import { AuthContext } from '../context/AuthProvider';

const AuthScreen = () => {
  const { name, setName } = useContext(AuthContext);
  const [email, setEmail] = useState('pt_idrisdeniz@hotmail.com');
  const [password, setPassword] = useState('123456');

  const handleAccount = async () => {
    let signInMethods = await fetchSignInMethodsForEmail(auth, email);

    if (signInMethods.length > 0) {
      // user exist, login with current user
      handleLogin();
    } else {
      // user not exist, create a new user
      handleSignUp();
    }
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('user created');

        addDoc(collection(db, 'users'), {
          name: name,
          email: email,
          uid: user.uid,
          createdAt: serverTimestamp(),
        });
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            console.log(`Email address ${email} already in use.`);
            break;
          default:
            console.log(error.message);
            break;
        }
      });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      console.log('User logged in');
    });
  };

  return (
    <View className="w-full h-full items-center mt-[25%] px-6">
      <View className="w-2/6 h-1/6">
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
          resizeMode="cover"
          source={require('../../assets/hopi-logo.png')}
        />
      </View>
      <Text className="font-bold text-lg">Hopin seni cebinden tanır!</Text>
      <Text className="text-center mt-4">
        Hopi üyeliğin için kullanmak istediğin{' '}
        <Text className="font-bold">adı, email adresi</Text> ve,{' '}
        <Text className="font-bold">parolanı </Text>
        aşağıdaki alana yazmalısın.
      </Text>

      <View className="w-full mt-8 space-y-4">
        <View className="items-center font-bold border-b-2 border-gray-400">
          <TextInput
            className="font-bold text-lg w-full text-center"
            placeholder="Ad"
            inputMode="text"
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View className="items-center border-b-2 border-gray-400">
          <TextInput
            className="font-bold text-lg w-full text-center"
            value={email}
            placeholder="E-posta"
            inputMode="email"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View className="items-center border-b-2 border-gray-400">
          <TextInput
            className="font-bold text-lg w-full text-center"
            value={password}
            placeholder="Şifre"
            inputMode="text"
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <TouchableOpacity
          className="bg-[#ce2c7c] items-center py-2 px-8 rounded-lg"
          onPress={handleAccount}
        >
          <Text className="text-white text-bold text-lg">Devam Et</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthScreen;
