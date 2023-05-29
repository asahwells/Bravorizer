import React from 'react';
import {SvgXml} from 'react-native-svg';
import tw from '../tailwind';

const LockIcon = () => {
  const xml = `<svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0C4.67619 0 2 2.67619 2 6V7C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7V6C14 2.67619 11.3238 0 8 0ZM8 2C10.2762 2 12 3.72381 12 6V7H4V6C4 3.72381 5.72381 2 8 2ZM8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16C6.9 16 6 15.1 6 14C6 12.9 6.9 12 8 12Z" fill="#FF6363"/>
</svg>`;

  return (
    <>
      <SvgXml xml={xml} style={tw`z-10`} />
    </>
  );
};

export default LockIcon;
