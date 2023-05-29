import {TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import StyledText from '../StyledText';
import {Loading} from '../Loader';
import tw from '../../tailwind';

interface IButton {
  title?: string;
  primary?: boolean;
  full?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  loading?: boolean;
  onPress?: () => void;
  loadingPadding?: number;
  disabled?: boolean;
  children?: React.ReactNode;
}
const Button = ({
  children,
  title = '',
  primary = true,
  full = true,
  onPress,
  style = {},
  loading = false,
  textStyle = {},
  loadingPadding = 1,
  disabled = false,
}: IButton) => {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={!loading ? onPress : () => null}
      style={tw.style(
        'py-4 flex justify-center rounded-lg',
        'shadow-offset-[0px]/[6px] elevation-2',
        'shadow-[#0e0e2f] shadow-radius-[2px] shadow-opacity-10',
        primary && 'bg-button',
        full && 'w-full',
        style,
      )}>
      {!loading ? (
        <StyledText
          style={tw.style(
            'text-center text-white dark:text-white font-semibold',
            textStyle,
          )}>
          {children ? children : title}
        </StyledText>
      ) : (
        <Loading
          style={tw.style('flex-1 justify-center items-center', {
            paddingVertical: loadingPadding,
          })}
          fill="#fff"
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;
