import React, {FC, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {auth} from '../constants/firebase';
import AppStack from './appstack';
import AuthStack from './authstack';
import store from '../store/store';
import {Provider} from 'react-redux';

import {Provider as PaperProvider} from 'react-native-paper';

const MainNav: FC = () => {
  const [user, setUser] = useState<any>(null);

  const bootstrap = () => {
    auth.onAuthStateChanged(_user => {
      if (_user) {
        setUser(_user);
      }
    });
  };

  useEffect(() => {
    bootstrap();
  }, []);

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          {user != null ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default MainNav;
