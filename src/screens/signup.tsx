import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import {FC, useState} from 'react';
import {Input, Button} from '../components';
import React from 'react';
import {auth, db} from '../constants/firebase';

const Signup: FC = (props) => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const signup = async () => {
    if (name && email && password) {
      try {
        const firebaseUser = await auth.createUserWithEmailAndPassword(email, password);

        if (firebaseUser) {
          await db.collection('users').doc(firebaseUser.user?.uid).set({name, email, password});
        }
      } catch (error) {
        console.log(error);
      }

    } else {
      Alert.alert('Error', 'missing fields');
    }
  }

  return (
    <View style={styles.container}>
      <Text>sign up screen</Text>
      <Input placeholder={'Name'} onChangeText={text => setName(text)} />
      <Input placeholder={'Email'} onChangeText={text => setEmail(text)} />
      <Input
        placeholder={'Password'}
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <Button title="Sign up" onPress={signup} />
      <View style={styles.loginText}>
        <Text style={{marginHorizontal: 5}}>Already Have an Account?</Text>
        <TouchableOpacity style={{marginHorizontal: 5}} onPress={() => props.navigation.navigate('login')}>
          <Text style={{color: 'rgba(81,135,200,1)'}}>Login Here</Text>
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

export default Signup;
