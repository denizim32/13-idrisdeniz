import { View, Text } from 'react-native';
import React from 'react';
import AuthProvider from './AuthProvider';
import DataProvider from './DataProvider';

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <DataProvider>{children}</DataProvider>
    </AuthProvider>
  );
};

export default Providers;
