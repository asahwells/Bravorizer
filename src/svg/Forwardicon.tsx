import React from 'react';
import {SvgXml} from 'react-native-svg';

const Forwardicon = () => {
  const xml = `<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.07095 6L1.24995 2.179C0.835953 1.765 0.835953 1.093 1.24995 0.679C1.66395 0.265 2.33595 0.265 2.74995 0.679L7.36395 5.293C7.75495 5.684 7.75495 6.317 7.36395 6.707L2.74995 11.321C2.33595 11.735 1.66395 11.735 1.24995 11.321C0.835953 10.907 0.835953 10.235 1.24995 9.821L5.07095 6Z" fill="#FF6363"/>
</svg>`;

  return <SvgXml xml={xml} />;
};

export default Forwardicon;
