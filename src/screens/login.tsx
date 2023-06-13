import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {Button, Input} from '../components';
import {auth} from '../constants/firebase';
import store from '../store/store';

const Login: FC = props => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const login = async () => {
    if (email && password) {
      await auth.signInWithEmailAndPassword(email, password)
        .then(currentUser => currentUser.user?.uid)
        .then((uid) => {
            store.dispatch({
              type: 'SET_GOOGLE_UID',
              payload: uid,
            });
        });
      // const uid = await auth.currentUser?.uid;

      // return new Promise<void>(resolve => {
      //   store.dispatch({
      //     type: 'SET_GOOGLE_UID',
      //     payload: uid,
      //   });
      //   resolve();
      // });

      // console.log(`UID is ${uid}`);
    } else {
      Alert.alert('Missing Fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login screen</Text>
      <Input placeholder={'Email'} onChangeText={text => setEmail(text)} />
      <Input
        placeholder={'Password'}
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <Button title="Login" onPress={login} />
      <View style={styles.loginText}>
        <Text style={{marginHorizontal: 5}}>Don't Have an Account?</Text>
        <TouchableOpacity
          style={{marginHorizontal: 5}}
          onPress={() => props.navigation.navigate('signup')}>
          <Text style={{color: 'rgba(81,135,200,1)'}}>Signup Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    flexDirection: 'row',
    marginVertical: 20,
  },
});

export default Login;
