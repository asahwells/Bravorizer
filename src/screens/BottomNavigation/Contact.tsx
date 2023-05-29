import {View, ImageBackground, Dimensions} from 'react-native';
import React from 'react';

const Contact = () => {
  const {width, height} = Dimensions.get('window');
  return (
    <View>
      <ImageBackground
        source={require('../../assets/img/image.png')}
        resizeMode="cover"
        style={{width: width, height: height, flex: 1}}
      />
    </View>
  );
};

export default Contact;
