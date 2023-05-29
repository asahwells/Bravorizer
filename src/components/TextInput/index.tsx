import React, {FC, useState} from 'react';
import {
  View,
  TextInput as TI,
  ViewStyle,
  TextInputProps,
  Pressable,
} from 'react-native';
import AlertCircleIcon from '../../svg/AlertCircleIcon';
import EyeIcon from '../../svg/EyeIcon';
import OutlineCheckIcon from '../../svg/OutlineCheckIcon';
import SearchIcon from '../../svg/SearchIcon';
import tw from '../../tailwind';
import StyledText from '../StyledText';

interface IProps extends TextInputProps {
  style?: ViewStyle;
  variant?: 'default' | 'success' | 'danger';
  password?: boolean;
  isSearch?: boolean;
  label?: string;
  iconRight?: React.ReactNode;
}

const TextInput: FC<IProps> = ({
  style,
  label,
  variant = 'default',
  password,
  isSearch,
  iconRight,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(password);
  // console.log(showPassword);
  // const [open, setOpen]= useState()
  return (
    <View style={tw.style('h-[74px] items-center justify-center relative')}>
      <StyledText
        style={tw`absolute top-0 left-4 text-xs font-normal text-blur my-1`}>
        {label}
      </StyledText>
      <TI
        {...props}
        style={tw.style(
          'h-[48px] px-4 rounded-lg pt-4 flex-1 w-full justify-center text-black',
          // props.value && 'pb-',
          variant === 'default' && {
            borderWidth: 1,
            borderColor: '#B5B5B5',
            // elevation: 4,
          },
          variant !== 'default' && 'bg-[#fff]',
          variant === 'success' && {
            borderWidth: 1,
            borderColor: '#1CB66C',

            // elevation: 4,
          },
          variant === 'danger' && {
            borderWidth: 1,
            borderColor: '#E31B23',

            // elevation: 4,
          },
          style,
        )}
        secureTextEntry={showPassword}
        autoComplete="off"
        autoCapitalize="none"
      />
      <View style={tw`absolute right-[16px] top-3`}>
        {isSearch ? (
          <Pressable>
            <SearchIcon />
          </Pressable>
        ) : null}
        {password ? (
          <Pressable onPress={() => setShowPassword(pr => !pr)}>
            <EyeIcon />
          </Pressable>
        ) : (
          <>
            {variant === 'danger' && <AlertCircleIcon />}
            {variant === 'success' && <OutlineCheckIcon />}
          </>
        )}
        {iconRight ? iconRight : null}
      </View>
    </View>
  );
};

export default TextInput;
