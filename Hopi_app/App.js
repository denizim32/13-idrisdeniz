import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Providers from './src/context/Providers';
import Router from './src/routes/Router';
export default function App() {
  return (
    <SafeAreaProvider>
      <Providers>
        <Router />
      </Providers>
    </SafeAreaProvider>
  );
}
