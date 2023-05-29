import React, {useState} from 'react';
import {View, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import tw from '../../tailwind';
import StyledText from '../../components/StyledText';
import Cancel from '../../svg/Vector';
import {NavigationProp} from '@react-navigation/native';
interface OtpProps {
  navigation: NavigationProp<any>;
}
const SetPin = ({navigation}: OtpProps) => {
  const [pin, setPin] = useState<any>('');

  const handlePinChange = (code: string) => {
    setPin(code);
  };
  const onCodeFilled = (code: any) => {
    console.log(`Code is ${code}, you are good to go!`);
    navigation.navigate('ConfirmPin', {codex: code});
    // Perform any additional actions upon code being filled
  };

  const handleNumberPress = (number: any) => {
    if (pin.length < 6) {
      setPin(pin + number);
      if (pin.length + 1 === 6) {
        onCodeFilled(pin + number);
      }
    }
  };
  console.log(pin);

  const handleDeletePress = () => {
    setPin(pin.slice(0, -1));
  };
  return (
    <SafeAreaView style={tw`flex-1 items-center bg-back`}>
      <View style={tw`mt-[88px] flex items-center justify-center mb-[48px] `}>
        <StyledText style={tw`text-white font-medium text-xl mb-1`}>
          Set Up Your Pin
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
        onCodeFilled={onCodeFilled}
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
        style={tw`flex flex-row flex-wrap mt-16 justify-between gap-y-4 px-[30px]`}>
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
    </SafeAreaView>
  );
};

export default SetPin;
