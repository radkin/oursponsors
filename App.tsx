import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useColorScheme} from 'react-native';
import {Avatar, Provider as PaperProvider} from 'react-native-paper';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Provider} from 'react-redux';
import store from './src/store/store';

import {
  PreferencesScreen,
  CongressScreen,
  SenatorsScreen,
  DetailsScreen,
} from './src/components/screens';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import { scale } from "react-native-size-matters";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  useColorScheme() === 'dark';

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
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
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
                  paddingTop: scale(13) - (scale(13) * 0.75),
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
                  paddingTop: scale(13) - (scale(13) * 0.75),                },
                drawerLabelStyle: {
                  fontSize: scale(13),
                },
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
