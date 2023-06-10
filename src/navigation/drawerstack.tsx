import React, {FC} from 'react';
import {
  PreferencesScreen,
  ProfileScreen,
  Login,
} from '../screens';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {scale} from 'react-native-size-matters';
import Tabstack from './tabstack';

const Drawer = createDrawerNavigator();

const Drawerstack: FC = () => {

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          height: scale(25),
        },
      }}>
      <Drawer.Screen
        name="Summary"
        component={Tabstack}
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

export default Drawerstack;
