import React from 'react';
import {SvgXml} from 'react-native-svg';

const PrivacyIcon = () => {
  const xml = `<svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0C4.67619 0 2 2.67619 2 6V7C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7V6C14 2.67619 11.3238 0 8 0ZM8 2C10.2762 2 12 3.72381 12 6V7H4V6C4 3.72381 5.72381 2 8 2ZM8 10C10.2 10 12 11.8 12 14C12 16.2 10.2 18 8 18C5.8 18 4 16.2 4 14C4 11.8 5.8 10 8 10ZM8 12C6.895 12 6 12.895 6 14C6 15.105 6.895 16 8 16C9.105 16 10 15.105 10 14C10 13.795 9.95934 13.602 9.90234 13.416C9.74434 13.759 9.403 14 9 14C8.448 14 8 13.552 8 13C8 12.597 8.24098 12.2557 8.58398 12.0977C8.39798 12.0407 8.205 12 8 12Z" fill="#FF6363"/>
</svg>`;

  return <SvgXml xml={xml} />;
};

export default PrivacyIcon;
