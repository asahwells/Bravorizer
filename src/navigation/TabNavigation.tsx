/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import screens from '../utils/screens';
import Profile from '../screens/BottomNavigation/Profile';
import Location from '../screens/BottomNavigation/Location';
import New from '../screens/BottomNavigation/New';
import Contact from '../screens/BottomNavigation/Contact';
import Message from '../screens/BottomNavigation/Message';
import {View} from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import tw from '../tailwind';
import AddIcon from '../svg/AddIcon';
import TabsUI from '../components/TabNavigation/TabUI';

const Tab = createBottomTabNavigator();
// export const CustomTabBarButton = ({children, onPress}: any) => (
//   <TouchableOpacity
//     style={{
//       top: -30,
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}
//     onPress={onPress}>
//     <Logo />
//   </TouchableOpacity>
// );
const TabNavigation = () => {
  const tabBarOptions = {
    activeTintColor: '#000', // Custom active tab icon color
    inactiveTintColor: '#878181', // Custom inactive tab icon color
    style: {
      borderRadius: 30,
      paddingTop: 40,
      paddingBottom: 40,
      backgroundColor: 'white',
    },
    labelStyle: {
      // Custom styles for tab labels
    },
  };
  return (
    <Tab.Navigator
      initialRouteName={screens.contact}
      tabBar={props => <TabsUI tabs={props.state.routes} {...props} />}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: tabBarOptions.style,
        tabBarActiveTintColor: tabBarOptions.activeTintColor,
        tabBarInactiveTintColor: tabBarOptions.inactiveTintColor,
        tabBarLabelStyle: tabBarOptions.labelStyle,
        tabBarBackground: () => (
          <LinearGradient
            colors={['#AF302408', '#338ADA66']}
            start={{x: 1, y: 0}}
            end={{x: 1, y: 0}}
            style={{
              height: 90,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              borderBottomRightRadius: 30,
              borderBottomLeftRadius: 40,
              // backgroundColor: 'to-white',
            }}
          />
        ),
      }}>
      <Tab.Screen
        name={screens.location}
        component={Location}
        options={{
          headerShown: false,
          // tabBarIcon: ({focused}) => (
          //   <View style={{alignItems: 'center', justifyContent: 'center'}}>
          //     <LocationIcon fill={focused ? '#000' : '#878181'} />
          //   </View>
          // ),
        }}
      />
      <Tab.Screen
        name={screens.new}
        component={New}
        options={{
          headerShown: false,
          // tabBarIcon: ({focused}) => (
          //   <View style={{alignItems: 'center', justifyContent: 'center'}}>
          //     <NewIcon fill={focused ? '#000' : '#878181'} />
          //   </View>
          // ),
        }}
      />
      <Tab.Screen
        name={screens.contact}
        component={Contact}
        options={{
          headerShown: false,
          // tabBarIcon: () => <Logo />,
          // tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name={screens.message}
        component={Message}
        options={{
          // headerShown: false,
          headerStyle: {
            backgroundColor: '#26333C',
          },
          headerTitle: 'Messages',
          headerTitleStyle: {
            color: 'white',
          },
          headerRight: () => {
            return (
              <View style={tw`mr-6`}>
                <AddIcon />
              </View>
            );
          },
          // tabBarIcon: ({focused}) => (
          //   <View style={{alignItems: 'center', justifyContent: 'center'}}>
          //     <MessageIcon fill={focused ? '#000' : '#878181'} />
          //   </View>
          // ),
        }}
      />
      <Tab.Screen
        name={screens.profile}
        component={Profile}
        options={{
          headerShown: false,

          // tabBarIcon: ({focused}) => (
          //   <View style={{alignItems: 'center', justifyContent: 'center'}}>
          //     <ProfileIcon fill={focused ? '#000' : '#878181'} />
          //   </View>
          // ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;
