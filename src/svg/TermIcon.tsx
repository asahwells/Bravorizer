import React from 'react';
import {SvgXml} from 'react-native-svg';

const TermIcon = () => {
  const xml = `<svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 0C0.9 0 0 0.9 0 2V15C0 15.552 0.448 16 1 16C1.552 16 2 15.552 2 15V3C2 2.448 2.448 2 3 2H13C13.552 2 14 1.552 14 1C14 0.448 13.552 0 13 0H2ZM6 4C4.9 4 4 4.9 4 6V20C4 21.1 4.9 22 6 22H17C18.1 22 19 21.1 19 20V6C19 4.895 18.105 4 17 4H6ZM9 8H14C14.552 8 15 8.448 15 9C15 9.552 14.552 10 14 10H9C8.448 10 8 9.552 8 9C8 8.448 8.448 8 9 8ZM9 12H14C14.552 12 15 12.448 15 13C15 13.552 14.552 14 14 14H9C8.448 14 8 13.552 8 13C8 12.448 8.448 12 9 12ZM9 16H14C14.552 16 15 16.448 15 17C15 17.552 14.552 18 14 18H9C8.448 18 8 17.552 8 17C8 16.448 8.448 16 9 16Z" fill="#FF6363"/>
</svg>`;

  return (
    <>
      <SvgXml xml={xml} />
    </>
  );
};

export default TermIcon;
