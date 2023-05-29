import React from 'react';
import {Dimensions, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import tw from '../tailwind';
const {width, height} = Dimensions.get('window');

const Patterns = () => {
  const xml = `<svg width=${width} height=${
    height / 3
  } viewBox="0 0 375 248" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="375" height="167" fill="#26333C"/>
<path opacity="0.2" d="M240.397 11.1695L-9.28461 111.2L-17 230H409V60.05L350.454 21.9694C317.712 0.672686 276.654 -3.35634 240.397 11.1695Z" fill="url(#paint0_linear_1_954)"/>
<path opacity="0.15" d="M265.214 77.3961L66.9405 156.691L61 248H389V117.377L338.486 84.579C316.68 70.4206 289.354 67.7418 265.214 77.3961Z" fill="url(#paint1_linear_1_954)"/>
<defs>
<linearGradient id="paint0_linear_1_954" x1="170.591" y1="155.455" x2="175.495" y2="46.9998" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_1_954" x1="313.66" y1="23.3884" x2="243.223" y2="231.918" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>`;

  return (
    <View style={tw`-mt-[60px]`}>
      <SvgXml xml={xml} />
    </View>
  );
};

export default Patterns;
