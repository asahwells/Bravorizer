/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable} from 'react-native';
import {View} from 'react-native-animatable';
import Toast from 'react-native-toast-message';
import {ErrorIcon, InfoIcon, SuccessIcon, WarningIcon} from '../svg/AlertIcons';
// import {Close2Icon} from '../svg/CloseIcon';
import tw from '../tailwind';
import StyledText from './StyledText';

const Alert = ({type, message, style}) => (
  <View
    style={tw.style('py-[10px] px-[18px] rounded-[8px] flex-row', style, {
      backgroundColor:
        type === 'success'
          ? '#dbebe7'
          : type === 'error'
          ? '#FF4444'
          : type === 'warning'
          ? '#efdecd'
          : '#d6d6f0',
    })}>
    <View style={tw`mr-4`}>
      {type === 'success' ? (
        <SuccessIcon />
      ) : type === 'error' ? (
        <ErrorIcon />
      ) : type === 'warning' ? (
        <WarningIcon />
      ) : (
        <InfoIcon />
      )}
    </View>
    <View style={tw`flex-1`}>
      <StyledText style={tw`text-sm text-white dark:text-[#000] font-normal`}>
        {message}
      </StyledText>
    </View>
    {/* <Pressable style={tw`ml-4`} onPress={onClose}>
      <Close2Icon />
    </Pressable> */}
  </View>
);
const toastConfig = {
  success2: ({text1 = '', text2 = ''}) => (
    <Alert
      style={{width: '95%'}}
      type="success"
      // onClose={() => hide()}
      message={text1 || text2}
    />
  ),
  error2: ({text1 = '', text2 = ''}) => (
    <Alert
      style={{width: '85%'}}
      type="error"
      // onClose={() => hide()}
      message={text1 || text2}
    />
  ),
  warning: ({text1 = '', text2 = ''}) => (
    <Alert
      style={{width: '95%'}}
      type="warning"
      // onClose={() => hide()}
      message={text1 || text2}
    />
  ),
  info: ({text1 = '', text2 = ''}) => (
    <Alert
      style={{width: '95%'}}
      type="info"
      // onClose={() => hide()}
      message={text1 || text2}
    />
  ),
  pop: ({text1 = '', text2 = '', hide}) => (
    <Pressable style={tw`bg-[#3b3b53] rounded-[8px] py-4 px-6`} onPress={hide}>
      <StyledText
        style={tw`font-medium text-[#fff] dark:text-[#fff] text-base`}>
        {text1 || text2}
      </StyledText>
    </Pressable>
  ),
  success3: ({text1 = '', text2 = '', hide}) => (
    <Pressable style={tw`bg-[#1CB66C] rounded-[8px] py-4 px-6`} onPress={hide}>
      <StyledText
        style={tw`font-medium text-[#fff] dark:text-[#fff] text-base`}>
        {text1 || text2}
      </StyledText>
    </Pressable>
  ),
};

const ToastConfig = () => {
  return <Toast position="bottom" config={toastConfig} />;
};

export default ToastConfig;
