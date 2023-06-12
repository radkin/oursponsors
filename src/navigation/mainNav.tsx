import React, {FC, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {auth} from '../constants/firebase';
import Drawerstack from './drawerstack';
import AuthStack from './authstack';
import store from '../store/store';
import {Provider} from 'react-redux';

import {Provider as PaperProvider} from 'react-native-paper';

const MainNav: FC = () => {
  const [firebaseUser, setFirebaseUser] = useState<any>(null);
  const [logout, setLogout] = useState<number>(1);
  const bootstrap = () => {
    auth.onAuthStateChanged(_user => {
      if (_user) {
        setFirebaseUser(_user);
        if (firebaseUser == null) {
          console.log("user has logged out!");
          setLogout(0);
        }
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
          {firebaseUser != null ? <Drawerstack logout={logout}/> : <AuthStack />}
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default MainNav;
