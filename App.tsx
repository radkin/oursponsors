/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {
  Image,
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CORP_HEADSHOT} from './src/images';

function LogoTitle() {
  return <Image style={{width: 50, height: 50}} source={CORP_HEADSHOT} />;
}
function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({navigation}) {
  useFocusEffect(
    React.useCallback(() => {
      alert('Screen was focused');
      // Do something when the screen is focused
      return () => {
        alert('Screen was unfocused');
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, []),
  );

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}
const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

function App(): JSX.Element {
  useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="First">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{headerTitle: props => <LogoTitle {...props} />}}
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
              <SettingsStack.Screen name="Profile" component={ProfileScreen} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
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
