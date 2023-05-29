import React from 'react';
import {SvgXml} from 'react-native-svg';

const SearchIcon = () => {
  const xml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 0C3.14585 0 0 3.14585 0 7C0 10.8541 3.14585 14 7 14C8.748 14 10.345 13.348 11.5742 12.2812L12 12.707V14L18 20L20 18L14 12H12.707L12.2812 11.5742C13.348 10.345 14 8.748 14 7C14 3.14585 10.8541 0 7 0ZM7 2C9.77327 2 12 4.22673 12 7C12 9.77327 9.77327 12 7 12C4.22673 12 2 9.77327 2 7C2 4.22673 4.22673 2 7 2Z" fill="#B5B5B5"/>
</svg>`;

  return (
    <>
      <SvgXml xml={xml} />
    </>
  );
};

export default SearchIcon;
