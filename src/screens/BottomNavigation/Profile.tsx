import {View, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import tw from '../../tailwind';
import {SafeAreaView} from 'react-native-safe-area-context';
import AuthCard from '../../components/AuthCard';
import StyledText from '../../components/StyledText';
import Patterns from '../../svg/Patterns';
import AvatarIcon from '../../svg/AvatarIcon';
import EmergencyIcon from '../../svg/EmergencyIcon';
import Forwardicon from '../../svg/Forwardicon';
import GofenceIcon from '../../svg/GofenceIcon';
import ReferralIcon from '../../svg/ReferralIcon';
import LockIcon from '../../svg/LockIcon';
import HelpIcon from '../../svg/HelpIcon';
import TermIcon from '../../svg/TermIcon';
import PrivacyIcon from '../../svg/PrivacyIcon';
import LogOutIcon from '../../svg/LogOutIcon';

const Profile = () => {
  const {height} = Dimensions.get('window');
  return (
    <SafeAreaView style={tw`flex-1 bg-back`}>
      <ScrollView>
        <View
          style={tw.style('flex justify-center items-center', {
            height: height / 5,
          })}>
          <Patterns />
        </View>
        <View>
          <AuthCard style={tw`px-6 bg-[#F2F2F2] gap-y-4`}>
            <TouchableOpacity
              style={tw`mt-[80px] border-[0.3px] border-blur bg-[#F2F2F2] rounded-[8px] flex flex-row items-center px-4 justify-between`}>
              <View style={tw` flex flex-row items-center `}>
                <EmergencyIcon />
                <StyledText style={tw`font-normal text-lg p-4`}>
                  Emergency Contact
                </StyledText>
              </View>
              <Forwardicon />
            </TouchableOpacity>
            <TouchableOpacity
              style={tw` border-[0.3px] border-blur bg-[#F2F2F2] rounded-[8px] flex flex-row items-center px-4 justify-between`}>
              <View style={tw` flex flex-row items-center `}>
                <GofenceIcon />
                <StyledText style={tw`font-normal text-lg p-4`}>
                  Gofence Parameters
                </StyledText>
              </View>
              <Forwardicon />
            </TouchableOpacity>
            <TouchableOpacity
              style={tw` border-[0.3px] border-blur bg-[#F2F2F2] rounded-[8px] flex flex-row items-center px-4 justify-between`}>
              <View style={tw` flex flex-row items-center `}>
                <ReferralIcon />
                <StyledText style={tw`font-normal text-lg p-4`}>
                  Referral Code
                </StyledText>
              </View>
              <Forwardicon />
            </TouchableOpacity>
            <StyledText style={tw`mt-[32px] mb-4 text-xl font-bold`}>
              App Settings
            </StyledText>
            <TouchableOpacity
              style={tw` border-[0.3px] border-blur bg-[#F2F2F2] rounded-[8px] flex flex-row items-center px-4 justify-between`}>
              <View style={tw` flex flex-row items-center `}>
                <LockIcon />
                <StyledText style={tw`font-normal text-lg p-4`}>
                  Change Security Pin
                </StyledText>
              </View>
              <Forwardicon />
            </TouchableOpacity>
            <TouchableOpacity
              style={tw` border-[0.3px] border-blur bg-[#F2F2F2] rounded-[8px] flex flex-row items-center px-4 justify-between`}>
              <View style={tw` flex flex-row items-center `}>
                <HelpIcon />
                <StyledText style={tw`font-normal text-lg p-4`}>
                  Help
                </StyledText>
              </View>
              <Forwardicon />
            </TouchableOpacity>
            <TouchableOpacity
              style={tw` border-[0.3px] border-blur bg-[#F2F2F2] rounded-[8px] flex flex-row items-center px-4 justify-between`}>
              <View style={tw` flex flex-row items-center `}>
                <TermIcon />
                <StyledText style={tw`font-normal text-lg p-4`}>
                  Terms & Conditions
                </StyledText>
              </View>
              <Forwardicon />
            </TouchableOpacity>
            <TouchableOpacity
              style={tw` border-[0.3px] border-blur bg-[#F2F2F2] rounded-[8px] flex flex-row items-center px-4 justify-between`}>
              <View style={tw` flex flex-row items-center `}>
                <PrivacyIcon />
                <StyledText style={tw`font-normal text-lg p-4`}>
                  Privacy Policy
                </StyledText>
              </View>
              <Forwardicon />
            </TouchableOpacity>
            <TouchableOpacity
              style={tw` border-[0.3px] mb-10 border-blur bg-[#F2F2F2] rounded-[8px] flex flex-row items-center px-4 justify-between`}>
              <View style={tw` flex flex-row items-center `}>
                {/* <TabContactIcon /> */}
                <StyledText style={tw`font-normal text-lg p-4`}>
                  Contact
                </StyledText>
              </View>
              <Forwardicon />
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`bg-[#FF4444] mb-[120px] rounded-[8px] flex flex-row items-center px-4 justify-between`}>
              <View style={tw` flex flex-row items-center `}>
                <LogOutIcon />
                <StyledText style={tw`font-normal text-lg p-4`}>
                  Log Out
                </StyledText>
              </View>
              <Forwardicon />
            </TouchableOpacity>
          </AuthCard>
          <View
            style={tw.style(
              'bg-white -top-8 left-0 right-0 absolute rounded-lg mx-8 h-auto flex flex-row p-4 gap-4 shadow-2xl',
            )}>
            <AvatarIcon />
            <View style={tw`flex flex-col`}>
              <StyledText style={tw`font-semibold text-lg`}>
                Isa Ayo Obi
              </StyledText>
              <StyledText style={tw`font-normal text-sm text-blur`}>
                Click here to edit profile
              </StyledText>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
