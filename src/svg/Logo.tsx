import React from 'react';
import {SvgXml} from 'react-native-svg';
import tw from '../tailwind';

const Logo = () => {
  const xml = `<svg width="148" height="148" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_1099)">
<circle cx="74" cy="62" r="50" fill="#DD2C2C"/>
</g>
<path d="M73.5 43.7501C63.1444 43.7501 54.75 52.1445 54.75 62.5001C54.75 72.8558 63.1444 81.2501 73.5 81.2501C83.8556 81.2501 92.25 72.8558 92.25 62.5001C92.25 52.1445 83.8556 43.7501 73.5 43.7501ZM74.4375 71.8751H72.5625C72.045 71.8751 71.625 71.4551 71.625 70.9376V69.0626C71.625 68.5451 72.045 68.1251 72.5625 68.1251H74.4375C74.955 68.1251 75.375 68.5451 75.375 69.0626V70.9376C75.375 71.4551 74.955 71.8751 74.4375 71.8751ZM73.5 64.3751C72.465 64.3751 71.625 63.5351 71.625 62.5001V55.0001C71.625 53.9651 72.465 53.1251 73.5 53.1251C74.535 53.1251 75.375 53.9651 75.375 55.0001V62.5001C75.375 63.5351 74.535 64.3751 73.5 64.3751Z" fill="white"/>
<defs>
<filter id="filter0_d_1_1099" x="0" y="0" width="148" height="148" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="12"/>
<feGaussianBlur stdDeviation="12"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1099"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1099" result="shape"/>
</filter>
</defs>
</svg>`;

  return (
    <>
      <SvgXml xml={xml} style={tw`z-10`} />
    </>
  );
};

export default Logo;
