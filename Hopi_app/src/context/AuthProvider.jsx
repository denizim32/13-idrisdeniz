import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DataContext } from './DataProvider';

export const AuthContext = React.createContext({
  currentUser: null,
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [name, setName] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('user').then((user) => {
      if (user) {
        setcurrentUser(JSON.parse(user));
      } else {
        setcurrentUser(null);
      }
      setIsLoading(false);
    });

    AsyncStorage.getItem('name').then((name) => {
      if (name) {
        setName(JSON.parse(name));
      }
    });

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setcurrentUser(user);
      if (user) {
        await AsyncStorage.setItem('user', JSON.stringify(user));
      } else {
        AsyncStorage.removeItem('user');
        AsyncStorage.removeItem('name');
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const storeName = async () => {
      await AsyncStorage.setItem('name', JSON.stringify(name));
    };
    storeName();
  }, [name]);

  const value = {
    currentUser,
    name,
    setName,
  };

  if (isLoading) return null;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

const styles = StyleSheet.create({});
