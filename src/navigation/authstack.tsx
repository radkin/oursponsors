import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Signup, Login} from '../screens';
const {Navigator, Screen} = createNativeStackNavigator();

const AuthStack: FC = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="login" component={Login} />
      <Screen name="signup" component={Signup} />
    </Navigator>
  );
};

export default AuthStack;
