import React, {Dispatch, ReactNode, SetStateAction} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import StyledText from '../StyledText';
import tw from '../../tailwind';
import Button from '../Button';
interface IProps {
  visiblity: boolean;
  setVisiblity: Dispatch<SetStateAction<boolean>>;
  buttonTitle: string;
  modalTitle: string;
  icon: ReactNode;
  onHandleNext?: () => void;
}
const ModalComponent = ({
  visiblity,
  setVisiblity,
  buttonTitle,
  modalTitle,
  icon,
  onHandleNext,
}: IProps) => {
  const handleNext = () => {
    setVisiblity(false);
    if (onHandleNext) {
      onHandleNext();
    }
  };

  return (
    <Modal
      backdropColor="transparent"
      backdropOpacity={1}
      isVisible={visiblity}
      animationIn="fadeIn"
      animationOut="fadeOut"
      supportedOrientations={['portrait']}
      style={tw`justify-center items-center`}
      onBackdropPress={() => setVisiblity(false)}>
      <View
        style={tw`bg-white w-full h-auto px-[48px] pb-6 rounded-lg items-center`}>
        <View style={tw`mt-[24px] px-[86px] mb-4`}>{icon}</View>
        <StyledText
          numberOfLines={2}
          style={tw`text-sm font-normal text-black text-center mb-6`}>
          {modalTitle}
        </StyledText>
        <Button onPress={handleNext} title={buttonTitle} />
      </View>
    </Modal>
  );
};

export default ModalComponent;
