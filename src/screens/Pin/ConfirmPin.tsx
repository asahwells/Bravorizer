import React, {useState} from 'react';
import {View, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import tw from '../../tailwind';
import Cancel from '../../svg/Vector';
import StyledText from '../../components/StyledText';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {RootStackParamList} from '../../../reactnavigation';
import ModalComponent from '../../components/Modal';
import ModalFailIcon from '../../svg/ModalFailIcon';
import ModalSuccessIcon from '../../svg/ModalSuccessIcon';
interface OtpProps {
  navigation: NavigationProp<any>;
  route: RouteProp<RootStackParamList, 'ConfirmPin'>;
}
const ConfirmPin = ({route, navigation}: OtpProps) => {
  const [failedvisiblity, setFailedVisiblity] = useState(true);
  const [successvisiblity, setSuccessVisiblity] = useState(false);
  const {codex} = route.params;
  const [pin, setPin] = useState('');

  const onCodeFilled = (code: any) => {
    console.log(`Code is ${code}, you are good to go!`);
    setSuccessVisiblity(true);
    if (pin !== codex.toString()) {
      Toast.show({
        text1: 'Incorrect PIN! Please try again.',
        type: 'error2',
      });
    }
  };
  const handleNumberPress = (number: any) => {
    if (pin.length < 6) {
      setPin(pin + number);
      if (pin.length + 1 === 6) {
        onCodeFilled(pin + number);
      }
    }
  };
  const handlePinChange = (code: string) => {
    setPin(code);
  };
  console.log(codex, pin);

  const handleDeletePress = () => {
    setPin(pin.slice(0, -1));
  };
  return (
    <SafeAreaView style={tw`flex-1 items-center bg-back`}>
      <View style={tw`mt-[88px] flex items-center justify-center mb-[48px] `}>
        <StyledText style={tw`text-white font-medium text-xl mb-1`}>
          Confirm Up Your Pin
        </StyledText>
        <StyledText
          numberOfLines={2}
          style={tw`text-white font-normal text-sm px-7 text-center `}>
          Your PIN is used to verify every change for securty.
        </StyledText>
      </View>
      <OTPInputView
        style={tw`flex flex-row justify-center items-center mb-6 px-9`}
        pinCount={6}
        code={pin}
        onCodeChanged={handlePinChange}
        onCodeFilled={onCodeFilled} // Called when using keyboard input
        autoFocusOnLoad
        secureTextEntry
        codeInputFieldStyle={{
          width: 20,
          height: 20,
          backgroundColor: '#004AD7',
          borderRadius: 40,
        }}
      />
      <View
        style={tw`flex flex-row flex-wrap justify-between gap-y-4 px-[30px] mt-16`}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => (
          <TouchableOpacity
            key={number}
            style={tw`flex items-center justify-center w-[30%] p-[12px] rounded-lg border-white bg-transparent border-[0.75px] `}
            onPress={() => handleNumberPress(number.toString())}>
            <Text style={tw`text-white text-base`}>{number}</Text>
          </TouchableOpacity>
        ))}
        <View style={tw`w-[30%]`} />

        <TouchableOpacity
          style={tw`flex items-center justify-center w-[30%] p-[12px] rounded-lg border-white bg-transparent border-[0.75px]`}
          onPress={() => handleNumberPress('0')}>
          <Text style={tw`text-white text-base`}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex items-center justify-center w-[30%] p-[12px] rounded-lg border-white bg-transparent border-[0.75px]`}
          onPress={handleDeletePress}>
          <Cancel />
        </TouchableOpacity>
      </View>
      <ModalComponent
        visiblity={failedvisiblity}
        setVisiblity={setFailedVisiblity}
        buttonTitle={'Try Again'}
        modalTitle={
          'PIN set up failed! Please check your connection and try again.'
        }
        icon={<ModalFailIcon />}
      />
      <ModalComponent
        visiblity={successvisiblity}
        setVisiblity={setSuccessVisiblity}
        buttonTitle={'Continue'}
        modalTitle={
          'PIN successfully created! Continue to 1Naira Mobile Wallet!'
        }
        onHandleNext={() => navigation.navigate('Login')}
        icon={<ModalSuccessIcon />}
      />
    </SafeAreaView>
  );
};

export default ConfirmPin;
