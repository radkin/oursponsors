import {View, Text, StyleSheet} from "react-native";
import { FC } from "react";

const Dashboard : FC = () => {
  return (
    <View style={styles.container}>
      <Text>
        Dashboard screen
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

export default Dashboard;
