import React from 'react';
import {SvgXml} from 'react-native-svg';

const Knob = () => {
  const xml = `<svg
  width="24"
  height="4"
  viewBox="0 0 24 4"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <rect width="24" height="4" rx="2" fill="#F2F2F2" />
</svg>`;

  return (
    <>
      <SvgXml xml={xml} />
    </>
  );
};

export default Knob;
