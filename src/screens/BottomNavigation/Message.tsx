import {View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from '../../tailwind';
import StyledText from '../../components/StyledText';
import TextInput from '../../components/TextInput';
import AvatarIcon from '../../svg/AvatarIcon';
const ChatData = [
  {
    image: <AvatarIcon />,
    name: 'Asah wells',
    message: 'hello world',
    timeStamp: '10:34',
  },
  {
    image: <AvatarIcon />,
    name: 'jungle boy',
    message: 'Please come home',
    timeStamp: '10:34',
  },
  {
    image: <AvatarIcon />,
    name: 'Sanchex',
    message: 'ok ohhh',
    timeStamp: '10:34',
  },
  {
    image: <AvatarIcon />,
    name: 'Asah wells',
    message: 'pelwe do normal',
    timeStamp: '10:34',
  },
  {
    image: <AvatarIcon />,
    name: 'Asah wells',
    message: 'hello world',
    timeStamp: '10:34',
  },
];
const Message = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white px-6`}>
      <TextInput
        placeholder="Type to search contact"
        isSearch
        style={tw`mb-5 bg-[#F9F9F9] font-normal text-sm border-[#F9F9F9]`}
      />
      {ChatData.map((data, index) => (
        <View style={tw`flex flex-row gap-x-4 mb-6`} key={index}>
          {data.image}
          <View style={tw`flex flex-row items-start flex-grow justify-between`}>
            <View style={tw`flex flex-col gap-y-2`}>
              <StyledText>{data.name}</StyledText>
              <StyledText>{data.message}</StyledText>
            </View>
            <StyledText style={tw`text-right`}>{data.timeStamp}</StyledText>
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default Message;
