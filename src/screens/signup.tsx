import {View, Text, StyleSheet} from "react-native";
import { FC } from "react";

const Signup : FC = () => {
  return (
    <View style={styles.container}>
      <Text>
        sign up screen
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

export default Signup;
