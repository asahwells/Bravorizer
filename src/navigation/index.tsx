import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './Routes';
import ToastConfig from '../components/ToastConfig';

const Provider = () => {
  return (
    <SafeAreaProvider>
      <Routes />
      <ToastConfig />
    </SafeAreaProvider>
  );
};

export default Provider;
