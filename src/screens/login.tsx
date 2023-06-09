import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { FC, useState } from "react";
import { Button, Input } from "../components";

const Login : FC = (props) => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text>
        Login screen
      </Text>
      <Input placeholder={'Email'} onChangeText={text => setEmail(text)} />
      <Input
        placeholder={'Password'}
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <Button title="Login" onPress={() => alert('button pressed')} />
      <View style={styles.loginText}>
        <Text style={{marginHorizontal: 5}}>Don't Have an Account?</Text>
        <TouchableOpacity style={{marginHorizontal: 5}} onPress={() => props.navigation.navigate('signup')}>
          <Text style={{color: 'rgba(81,135,200,1)'}}>Signup Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

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
})

export default Login;
