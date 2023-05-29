import React from 'react';
import {Text, TextStyle} from 'react-native';
import tw from '../../tailwind';

const StyledText = ({
  children,
  style = {},
  numberOfLines = 1,
}: {
  style?: TextStyle;
  numberOfLines?: number;
  children?: React.ReactNode;
}) => {
  return (
    <Text
      style={tw.style('text-black dark:text-white', style)}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default StyledText;
