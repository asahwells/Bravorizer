import React from 'react';
import {SvgXml} from 'react-native-svg';
import tw from '../tailwind';

const LogOutIcon = () => {
  const xml = `<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 0C0.895 0 0 0.895 0 2V18C0 19.105 0.895 20 2 20H10C11.105 20 12 19.105 12 18V11H6C5.448 11 5 10.552 5 10C5 9.448 5.448 9 6 9H12V2C12 0.895 11.105 0 10 0H2ZM12 9V11H14V12.4004C14 12.7234 14.1951 13.0147 14.4941 13.1387C14.5931 13.1797 14.6978 13.1992 14.8008 13.1992C15.0088 13.1992 15.2112 13.1198 15.3652 12.9668L17.7656 10.5645C18.0776 10.2525 18.0776 9.74559 17.7656 9.43359L15.3652 7.0332C15.1362 6.8052 14.7941 6.73833 14.4941 6.86133C14.1951 6.98533 14 7.27661 14 7.59961V9H12Z" fill="white"/>
</svg>`;

  return (
    <>
      <SvgXml xml={xml} style={tw`z-10`} />
    </>
  );
};

export default LogOutIcon;
