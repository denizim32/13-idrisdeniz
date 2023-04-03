import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { db } from '../services/firebase';

export const DataContext = React.createContext();

const DataProvider = ({ children }) => {
  const [welcomeScreenData, setWelcomeScreenData] = useState([]);
  const [sliderData, setSliderData] = useState([]);

  // Queries
  const welcomeRef = query(collection(db, 'welcomeContent'));
  const sliderRef = query(collection(db, 'carouselOffers'));

  async function fetchData(query, cb) {
    try {
      const querySnapshot = await getDocs(query);
      querySnapshot.forEach((doc) => {
        cb((oldArray) => [...oldArray, doc.data()]);
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData(welcomeRef, setWelcomeScreenData);
    fetchData(sliderRef, setSliderData);
  }, []);
  
  return (
    <DataContext.Provider value={{ welcomeScreenData, sliderData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

const styles = StyleSheet.create({});
