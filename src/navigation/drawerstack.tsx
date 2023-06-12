import React, {FC} from 'react';
import {
  PreferencesScreen,
  ProfileScreen,
  Login,
} from '../screens';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {scale} from 'react-native-size-matters';
import Tabstack from './tabstack';
import login from "../screens/login";

const Drawer = createDrawerNavigator();

interface Props {
  logout: number;
}

const Drawerstack: FC <Props> = (props) => {

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
          drawerItemStyle: { display: (props.logout===1)?"flex":"none", }
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
          drawerItemStyle: { display: (props.logout===1)?"flex":"none", }
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
          drawerItemStyle: { display: (props.logout===1)?"flex":"none", }
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={login}
        options={{
          headerTitleStyle: {
            fontSize: scale(13),
            lineHeight: scale(13) * 0.75,
            paddingTop: scale(13) - scale(13) * 0.75,
          },
          drawerLabelStyle: {
            fontSize: scale(13),
          },
          drawerItemStyle: { display: (props.logout===1)?"flex":"none", }
        }}
      />

    </Drawer.Navigator>
  );
};

export default Drawerstack;
