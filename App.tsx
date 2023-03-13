import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Image, StyleSheet, useColorScheme} from 'react-native';

import {Avatar, Provider as PaperProvider} from 'react-native-paper';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CALIFORNIA} from './src/images';
import Flag from 'react-native-flags';

import {
  DetailsScreen,
  SettingsScreen,
  HomeScreen,
  ProfileScreen,
  RepsScreen,
} from './src/components/screens';

// function LogoTitle() {
//   return <Image style={{width: 70, height: 70}} source={CORP_HEADSHOT} />;
// }
const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const CarouselStack = createNativeStackNavigator();

function App(): JSX.Element {
  useColorScheme() === 'dark';
  return (
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
                return <Flag code="US" size={24} />;
              },
            }}>
            {() => (
              <HomeStack.Navigator>
                <HomeStack.Screen
                  name="Senators"
                  component={RepsScreen}
                  /*
                  options={{headerTitle: props => <LogoTitle {...props} />}}
                  */
                />
                <HomeStack.Screen name="Details" component={DetailsScreen} />
              </HomeStack.Navigator>
            )}
          </Tab.Screen>

          <Tab.Screen
            name="Second"
            options={{
              tabBarIcon: ({}) => {
                return (
                  <Image style={{width: 24, height: 24}} source={CALIFORNIA} />
                );
              },
            }}>
            {() => (
              <SettingsStack.Navigator>
                <SettingsStack.Screen
                  name="Settings"
                  component={SettingsScreen}
                />
                <SettingsStack.Screen
                  name="Profile"
                  component={ProfileScreen}
                />
              </SettingsStack.Navigator>
            )}
          </Tab.Screen>

          <Tab.Screen
            name="Third"
            options={{
              tabBarIcon: ({}) => {
                return <Avatar.Icon size={24} icon="flag" />;
              },
            }}>
            {() => (
              <CarouselStack.Navigator
                screenOptions={{
                  headerShown: false,
                }}>
                <CarouselStack.Screen name="Home" component={HomeScreen} />
              </CarouselStack.Navigator>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
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
