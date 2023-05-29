import {View, ViewStyle} from 'react-native';
import React from 'react';
import tw from '../../tailwind';

interface IProps {
  children: React.ReactNode;
  style?: ViewStyle;
}
const AuthCard = ({children, style = {}}: IProps) => {
  return (
    <View style={tw.style('bg-white rounded-t-lg h-full', style)}>
      {children}
    </View>
  );
};

export default AuthCard;
