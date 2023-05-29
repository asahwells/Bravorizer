import React from 'react';
import {SvgXml} from 'react-native-svg';

const Cancel = () => {
  const xml = `<svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 0H6.109C5.419 0 4.778 0.355 4.413 0.94L0 8L4.412 15.06C4.778 15.645 5.419 16 6.109 16H21C22.105 16 23 15.105 23 14V2C23 0.895 22.105 0 21 0ZM17.707 11.293C18.098 11.684 18.098 12.316 17.707 12.707C17.512 12.902 17.256 13 17 13C16.744 13 16.488 12.902 16.293 12.707L13 9.414L9.707 12.707C9.512 12.902 9.256 13 9 13C8.744 13 8.488 12.902 8.293 12.707C7.902 12.316 7.902 11.684 8.293 11.293L11.586 8L8.293 4.707C7.902 4.316 7.902 3.684 8.293 3.293C8.684 2.902 9.316 2.902 9.707 3.293L13 6.586L16.293 3.293C16.684 2.902 17.316 2.902 17.707 3.293C18.098 3.684 18.098 4.316 17.707 4.707L14.414 8L17.707 11.293Z" fill="white"/>
</svg>`;

  return <SvgXml xml={xml} />;
};

export default Cancel;