import {View, Text, StyleSheet} from 'react-native';
import React, { FC } from "react";
import {Button} from '../components';
import { auth } from "../constants/firebase";

const Home : FC = () => {

  const signOut = () => {
    auth.signOut();
  }

  return (
    <View style={styles.container}>
      <Text>
        Home screen
      </Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Home;
