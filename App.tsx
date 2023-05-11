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

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  useColorScheme() === 'dark';

  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: responsiveScreenHeight(4.7),
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
                  size={responsiveScreenHeight(4)}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: responsiveScreenHeight(0.75),
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
                  size={responsiveScreenHeight(4)}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: responsiveScreenHeight(0.75),
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
                height: responsiveScreenHeight(5),
              },
            }}>
            <Drawer.Screen
              name="Summary"
              component={TabNavigator}
              options={{
                headerTitleStyle: {
                  fontSize: responsiveScreenFontSize(2),
                },
                drawerLabelStyle: {
                  fontSize: responsiveScreenFontSize(1.5),
                },
              }}
            />
            <Drawer.Screen
              name="Preferences"
              component={PreferencesScreen}
              options={{
                headerTitleStyle: {
                  fontSize: responsiveScreenFontSize(2),
                },
                drawerLabelStyle: {
                  fontSize: responsiveScreenFontSize(1.5),
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
