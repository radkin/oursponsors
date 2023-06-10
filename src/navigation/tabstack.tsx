import React, {FC} from 'react';
import {SenatorsScreen, DetailsScreen, CongressScreen} from '../screens';
import {scale} from 'react-native-size-matters';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Avatar} from 'react-native-paper';
const Tab = createBottomTabNavigator();

const Tabstack: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: scale(30),
        },
        headerShown: false,
        title: '',
      }}>
      <Tab.Screen
        name="Senators"
        component={SenatorsScreen}
        options={{
          tabBarIcon: ({}) => {
            return (
              <Avatar.Text
                size={scale(20)}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: scale(5),
                }}
                label={'Sen'}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          tabBarItemStyle: {
            display: 'none',
          },
        }}
      />

      <Tab.Screen
        name="Congress"
        component={CongressScreen}
        options={{
          tabBarIcon: ({}) => {
            return (
              <Avatar.Text
                size={scale(20)}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: scale(5),
                }}
                label="Con"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabstack;
