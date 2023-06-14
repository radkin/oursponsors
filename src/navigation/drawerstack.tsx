import React, { FC, useState } from "react";
import {
  PreferencesScreen,
  ProfileScreen,
} from '../screens';
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import {scale} from 'react-native-size-matters';
import Tabstack from './tabstack';
import login from "../screens/login";
import { auth } from "../constants/firebase";
import {View} from "react-native";
import {Button} from "../components";

const Drawer = createDrawerNavigator();

const Drawerstack: FC = () => {
  const [logout, setLogout] = useState<number>(0);

  const signOut = () => {
    auth.signOut();
    setLogout(1);
  };

  console.log(`logout is ${logout}`);

  const CustomComponent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <View>
          <Button title="log out" onPress={signOut} />
        </View>
      </DrawerContentScrollView>
    )
  }

  return (
    <Drawer.Navigator
      // drawerContent={(props) => <CustomComponent {...props} />}
      screenOptions={{
        headerStyle: {
          height: scale(25),
        },
      }}
    >
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
          drawerItemStyle: { display: (logout===0)?"flex":"none", }
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
          drawerItemStyle: { display: (logout===0)?"flex":"none", }
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
          drawerItemStyle: { display: (logout===0)?"flex":"none", }
        }}
      />
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
          drawerItemStyle: { display: (logout===1)?"flex":"none", }
        }}
      />
      <Drawer.Screen
        name="Log out"
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
          drawerItemStyle: { display: (logout===0)?"flex":"none", }
        }}
      />

    </Drawer.Navigator>
  );
};

export default Drawerstack;
