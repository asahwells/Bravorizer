import {StyleSheet, View, Dimensions} from 'react-native';
import tw from '../../tailwind';
import TabsHandler from './TabsHandler';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
// import LinearGradient from 'react-native-linear-gradient';

function TabsUI(props) {
  const {width} = Dimensions.get('window');
  // const {bottom} = useSafeAreaInsets();

  return (
    <>
      <View
        style={tw.style('absolute bg-inherit', {
          minHeight: 76,
          width: width,
          borderRadius: 12,
          bottom: 0,
        })}>
        {/* @ts-ignore */}
        <View {...StyleSheet.absoluteFill}>
          <LinearGradient
            colors={['#AF302408', '#338ADA66']}
            start={{x: 1, y: 0}}
            // end={{x: 0, y: 0}}
            style={{
              height: 90,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              borderBottomRightRadius: 30,
              borderBottomLeftRadius: 40,
              // backgroundColor: 'to-white',
            }}>
            <TabsHandler {...props} />
          </LinearGradient>
        </View>
      </View>
    </>
  );
}

export default TabsUI;
