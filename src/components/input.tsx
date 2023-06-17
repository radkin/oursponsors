import React, {FC} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const Input: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry || false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: scale(280),
    alignSelf: 'center',
    backgroundColor: '#e3e3e3',
    borderRadius: scale(5),
    marginVertical: scale(10),
  },
  input: {
    padding: 15,
  },
});

export default Input;
