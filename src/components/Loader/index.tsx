import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Svg, {Path} from 'react-native-svg';
import Modal from 'react-native-modal';
// import {wp} from '../../utils/responsive';

interface Props {
  visible: boolean;
  overlayColor?: string;
  // animationType?: Animations['animationIn'];
  children?: React.ReactNode;
}

export const Loading = ({fill = '#E31B23', style = {}}) => (
  <Animatable.View
    style={style}
    animation="rotate"
    iterationCount="infinite"
    duration={500}>
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM4.32 12C4.32 16.2415 7.75845 19.68 12 19.68C16.2415 19.68 19.68 16.2415 19.68 12C19.68 7.75845 16.2415 4.32 12 4.32C7.75845 4.32 4.32 7.75845 4.32 12Z"
        fill="transparent"
      />
      <Path
        d="M12 2.16C12 0.967065 11.0252 -0.0197153 9.85159 0.19387C7.97684 0.535042 6.19952 1.31989 4.67394 2.49585C2.57459 4.11408 1.07011 6.38187 0.39534 8.94519C-0.279429 11.5085 -0.0865082 14.2231 0.943988 16.6653C1.97448 19.1074 3.78456 21.1396 6.09166 22.4447C8.39876 23.7498 11.073 24.2543 13.6971 23.8794C16.3211 23.5045 18.7471 22.2714 20.5965 20.3726C22.4459 18.4737 23.6146 16.0159 23.92 13.383C24.142 11.4696 23.8991 9.54194 23.2257 7.75934C22.8042 6.64338 21.4563 6.31627 20.4338 6.93082C19.4113 7.54538 19.1154 8.87321 19.422 10.0261C19.6681 10.9516 19.7407 11.9212 19.6288 12.8851C19.4333 14.5702 18.6854 16.1432 17.5018 17.3584C16.3182 18.5737 14.7655 19.3629 13.0861 19.6028C11.4067 19.8427 9.69521 19.5198 8.21866 18.6846C6.74212 17.8494 5.58367 16.5487 4.92415 14.9858C4.26464 13.4228 4.14117 11.6854 4.57302 10.0449C5.00487 8.40439 5.96774 6.95301 7.31132 5.91734C8.07988 5.32492 8.94827 4.88759 9.86833 4.62176C11.0144 4.29064 12 3.35294 12 2.16Z"
        fill={fill}
      />
    </Svg>
  </Animatable.View>
);
const Loader = ({
  children,
  visible,
  // animationType = 'none',
  overlayColor = 'rgba(255,255,255,0.7)',
}: Props) => {
  return (
    <Modal
      backdropColor="#fff"
      backdropOpacity={0.7}
      isVisible={visible}
      // animationIn={animationType}
      supportedOrientations={['portrait']}
      onBackdropPress={() => null}>
      <View style={[styles.container, {backgroundColor: overlayColor}]}>
        {/* <View style={{alignItems: 'center'}}> */}
        <Loading />
        {children}
      </View>
    </Modal>
  );
};
export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationStyle: {
    // height: '100%',
    width: '100%',
    maxWidth: 100,
  },
});
