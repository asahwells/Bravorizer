import {TouchableOpacity, View, Dimensions} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import tw from '../../tailwind';
import {SafeAreaView} from 'react-native-safe-area-context';
import Logo from '../../svg/Logo';
import Patterns from '../../svg/Patterns';
import AuthCard from '../../components/AuthCard';
import StyledText from '../../components/StyledText';
import Knob from '../../svg/Knob';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import {NavigationProp} from '@react-navigation/native';
interface LoginProps {
  navigation: NavigationProp<any>;
}
const Login = ({navigation}: LoginProps) => {
  const {height} = Dimensions.get('window');
  return (
    <KeyboardAwareScrollView style={tw`bg-back w-full h-full`}>
      <SafeAreaView>
        <View style={tw.style('flex justify-center items-center')}>
          <Logo />
          <StyledText
            style={tw`font-semibold text-3xl text-white z-20 -mb-12 absolute`}>
            SOS
          </StyledText>
          <Patterns />
        </View>
        <AuthCard style={tw.style('-mt-16 pb-4 px-6', `min-h-[${height / 6}]`)}>
          <View style={tw`flex items-center mt-4`}>
            <Knob />
          </View>
          <StyledText style={tw`mt-8 font-bold text-2xl mb-6`}>
            Sign In
          </StyledText>
          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={() => navigation.navigate('Navigation')}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <>
                <TextInput
                  label="Email/Phone Number"
                  style={tw`mb-5`}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                <TextInput
                  label="Password"
                  style={tw`mb-5`}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  password
                  value={values.password}
                  secureTextEntry
                />
                <Button onPress={handleSubmit} title="Submit" />
              </>
            )}
          </Formik>
          <View style={tw`flex items-center mt-6`}>
            <TouchableOpacity>
              <StyledText style={tw`text-button text-sm font-semibold`}>
                Forgot Password ?
              </StyledText>
            </TouchableOpacity>
            <View style={tw`mt-[45px] flex flex-row `}>
              <StyledText style={tw`text-sm font-normal text-blur`}>
                Don't have an account yet?{' '}
              </StyledText>
              <TouchableOpacity>
                <StyledText style={tw`text-button text-sm font-semibold`}>
                  Sign up
                </StyledText>
              </TouchableOpacity>
            </View>
          </View>
        </AuthCard>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Login;
