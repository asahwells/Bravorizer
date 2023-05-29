import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const OutlineCheckIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z"
      fill="#1CB66C"
    />
  </Svg>
);

export default OutlineCheckIcon;
