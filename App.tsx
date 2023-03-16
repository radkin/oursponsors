import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, useColorScheme} from 'react-native';

import {Avatar, Provider as PaperProvider} from 'react-native-paper';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  DetailsScreen,
  SenatorsScreen,
  CongressScreen,
} from './src/components/screens';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

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
                return <Avatar.Icon size={24} icon="flag" />;
              },
            }}>
            {() => (
              <HomeStack.Navigator>
                <HomeStack.Screen name="Senators" component={SenatorsScreen} />
                <HomeStack.Screen name="Details" component={DetailsScreen} />
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
              <HomeStack.Navigator>
                <HomeStack.Screen name="Congress" component={CongressScreen} />
                <HomeStack.Screen name="Details" component={DetailsScreen} />
              </HomeStack.Navigator>
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
