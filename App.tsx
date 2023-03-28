import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet, useColorScheme} from 'react-native';
import {Avatar, Provider as PaperProvider} from 'react-native-paper';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  DetailsScreen,
  SenatorsScreen,
  CongressScreen,
} from './src/components/screens';
import CustomDrawerContent from './src/components/CustomDrawerContent';

import {Provider} from 'react-redux';
import store from './src/store/store';

const Tab = createBottomTabNavigator();
const HomeStack = createDrawerNavigator();

function App(): JSX.Element {
  useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              title: '',
            }}>
            <Tab.Screen
              name="First"
              options={{
                tabBarIcon: ({}) => {
                  return <Avatar.Icon size={24} icon="flag" />;
                },
              }}>
              {() => (
                <HomeStack.Navigator
                  drawerContent={props => <CustomDrawerContent {...props} />}>
                  <HomeStack.Screen
                    name="Senators"
                    component={SenatorsScreen}
                  />
                  <HomeStack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{
                      drawerItemStyle: {
                        display: 'none',
                      },
                    }}
                  />
                </HomeStack.Navigator>
              )}
            </Tab.Screen>

            <Tab.Screen
              name="Second"
              options={{
                tabBarIcon: ({}) => {
                  return <Avatar.Icon size={24} icon="flag-outline" />;
                },
              }}>
              {() => (
                <HomeStack.Navigator
                  drawerContent={props => <CustomDrawerContent {...props} />}>
                  <HomeStack.Screen
                    name="Congress"
                    component={CongressScreen}
                  />
                  <HomeStack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{
                      drawerItemStyle: {
                        display: 'none',
                      },
                    }}
                  />
                </HomeStack.Navigator>
              )}
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
