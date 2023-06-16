import React, {FC, useState} from 'react';
import {PreferencesScreen, ProfileScreen} from '../screens';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {scale} from 'react-native-size-matters';
import Tabstack from './tabstack';
import login from '../screens/login';
import {auth} from '../constants/firebase';
import {View, Button, Text} from 'react-native';
import signup from "../screens/signup";

const Drawer = createDrawerNavigator();

const Drawerstack: FC = () => {
  const [logout, setLogout] = useState<number>(0);
  
  const LogoutScreen = () => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="Logout"
          onPress={() => {
            auth.signOut();
            setLogout(1);
          }}
        />
      </View>
    );
  };

  if (logout === 0) {
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
        <Drawer.Screen
          name="Logout"
          component={LogoutScreen}
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
  } else {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            height: scale(25),
          },
        }}>
        <Drawer.Screen
          name="Login"
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
          }}
        />
        <Drawer.Screen
          name="SignUp"
          component={signup}
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
  }
};

export default Drawerstack;
