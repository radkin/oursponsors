import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Image, StyleSheet, useColorScheme} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CORP_HEADSHOT} from './src/images';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  DetailsScreen,
  SettingsScreen,
  HomeScreen,
  ProfileScreen,
  RepsScreen,
} from './src/components/screens';

function LogoTitle() {
  return <Image style={{width: 70, height: 70}} source={CORP_HEADSHOT} />;
}
const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const CarouselStack = createNativeStackNavigator();

function App(): JSX.Element {
  useColorScheme() === 'dark';
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown: false,
          title: ''
        }}>
          <Tab.Screen
            name="First"
            options={{
              tabBarIcon: ({size, focused, color}) => {
                return <FontAwesome5 name="flag-usa" size={24} />;
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

          <Tab.Screen name="Second">
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

          <Tab.Screen name="Third">
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
