import React, {FC} from 'react';
import {
  PreferencesScreen,
  ProfileScreen,
  SenatorsScreen,
  DetailsScreen,
  CongressScreen,
} from '../screens';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {scale} from 'react-native-size-matters';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Avatar} from 'react-native-paper';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const AppStack: FC = () => {
  const TabNavigator = () => {
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

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          height: scale(25),
        },
      }}>
      <Drawer.Screen
        name="Summary"
        component={TabNavigator}
        options={{
          headerTitleStyle: {
            fontSize: scale(13),
            lineHeight: scale(13) * 0.75,
            paddingTop: scale(13) - scale(13) * 0.75,
          },
          drawerLabelStyle: {
            fontSize: scale(13),
          },
        }}
      />
      <Drawer.Screen
        name="Preferences"
        component={PreferencesScreen}
        options={{
          headerTitleStyle: {
            fontSize: scale(13),
            lineHeight: scale(13) * 0.75,
            paddingTop: scale(13) - scale(13) * 0.75,
          },
          drawerLabelStyle: {
            fontSize: scale(13),
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitleStyle: {
            fontSize: scale(13),
            lineHeight: scale(13) * 0.75,
            paddingTop: scale(13) - scale(13) * 0.75,
          },
          drawerLabelStyle: {
            fontSize: scale(13),
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
