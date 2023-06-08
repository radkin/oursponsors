import {View, Text, StyleSheet} from "react-native";
import { FC } from "react";

const Login : FC = () => {
  return (
    <View style={styles.container}>
      <Text>
        Login screen
      </Text>
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

export default Login;
