import React from 'react';
import {SvgXml} from 'react-native-svg';

const EmergencyIcon = () => {
  const xml = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 0C7.93913 0 6.92172 0.421427 6.17157 1.17157C5.42143 1.92172 5 2.93913 5 4C5 5.06087 5.42143 6.07828 6.17157 6.82843C6.92172 7.57857 7.93913 8 9 8C10.0609 8 11.0783 7.57857 11.8284 6.82843C12.5786 6.07828 13 5.06087 13 4C13 2.93913 12.5786 1.92172 11.8284 1.17157C11.0783 0.421427 10.0609 0 9 0ZM9 11C5.996 11 0 12.508 0 15.5V17C0 17.552 0.448 18 1 18H17C17.552 18 18 17.552 18 17V15.5C18 12.508 12.004 11 9 11Z" fill="#FF6363"/>
</svg>`;

  return <SvgXml xml={xml} />;
};

export default EmergencyIcon;
