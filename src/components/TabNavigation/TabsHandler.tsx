import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import tw from '../../tailwind';
import screens from '../../utils/screens';
import LocationIcon from '../../svg/LocationIcon';
import NewIcon from '../../svg/NewIcon';
import MessageIcon from '../../svg/MessageIcon';
// import TabContactIcon from '../../svg/TabContacticon';
import ProfileIcon from '../../svg/ProfileIcon';
import Logo from '../../svg/Logo';

function getIcon(tab, _focused) {
  switch (tab) {
    case screens.location: {
      return _focused ? (
        <LocationIcon fill={''} />
      ) : (
        <LocationIcon fill={'#fff'} />
      );
    }
    case screens.new: {
      return _focused ? <NewIcon fill={''} /> : <NewIcon fill={'#fff'} />;
    }
    case screens.message: {
      return _focused ? (
        <MessageIcon fill={''} />
      ) : (
        <MessageIcon fill={'#fff'} />
      );
    }
    case screens.contact: {
      return <Logo />;
    }
    case screens.profile: {
      return _focused ? (
        <ProfileIcon fill={''} />
      ) : (
        <ProfileIcon fill={'#fff'} />
      );
    }
    default:
      break;
  }

  return null;
}

function TabsHandler({tabs, ...props}) {
  // const route = useRoute();
  // const routeName = route.name;

  const {state, navigation, descriptors} = props;

  return (
    <View
      style={tw.style(
        'flex-row w-[95%] mx-auto justify-between',
        'rounded-2xl px-0 py-4 min-h-[76px]',
      )}>
      {tabs.map((tab, key) => {
        const isFocused = state.index === key;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: tab.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(tab.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: tab.key,
          });
        };

        const {options} = descriptors[tab.key];
        // const label =
        //   options.tabBarLabel !== undefined
        //     ? options.tabBarLabel
        //     : options.title !== undefined
        //     ? options.title
        //     : tab.name;

        return (
          <TouchableOpacity
            {...{key}}
            onPress={onPress}
            onLongPress={onLongPress}
            style={tw.style('px-0 w-1/6')}
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}>
            <View
              style={tw.style(
                'items-center flex-col flex-1',
                tab.name === 'Contact' && {
                  top: -30,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              )}>
              {getIcon(tab.name, isFocused)}
              {/* {isFocused ? (
                <StyledText
                style={tw.style('font-500 text-xs mt-[6px]', {
                  'text-textblack': isFocused,
                })}>
                {label || tab.name}
                </StyledText>
              ) : null} */}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabsHandler;
