import React, {FC} from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";

interface Props {
  title: string;
  onPress: () => void;
}

const Button : FC <Props> = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: scale(10),
    paddingHorizontal: scale(20),
    borderRadius: scale(8),
    marginVertical: scale(10),
  },
  text: {
    color: '#fff',
    fontSize: scale(10),
  }
})

export default Button;
