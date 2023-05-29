import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, StatusBar} from 'react-native';
import {RootStackParamList} from '../../reactnavigation';
import Login from '../screens/Welcome/Login';
import Signup from '../screens/Welcome/Signup';
import SetPin from '../screens/Pin/SetPin';
import ConfirmPin from '../screens/Pin/ConfirmPin';
import TabNavigation from './TabNavigation';
import ArrowLeft from '../svg/ArrowLeft';
// import {storage} from '../utils/storage';

const Stack = createNativeStackNavigator<RootStackParamList>();
export const HeaderLeft = HeaderBackButtonProps => (
  <Pressable
    style={({pressed}) => [
      {
        opacity: pressed ? 0.5 : 1,
        marginLeft: 0,
        paddingRight: 14,
        paddingVertical: 1,
        // backgroundColor: ''
      },
    ]}
    {...HeaderBackButtonProps}>
    <ArrowLeft />
  </Pressable>
);
const AuthStack = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="SetPin"
          component={SetPin}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="ConfirmPin"
          component={ConfirmPin}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            header: () => null,
          }}
        />
        <Stack.Group>
          <Stack.Screen
            name="Navigation"
            component={TabNavigation}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
