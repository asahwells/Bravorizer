import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthStack from './AuthStack';
// import AppStack from './AppStack';

const Routes = () => {
  return (
    <NavigationContainer>
      {/* {isAuth && user ? <AppStack /> : <AuthStack />} */}
      <AuthStack />
    </NavigationContainer>
  );
};

export default Routes;
