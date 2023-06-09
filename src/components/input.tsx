import React, {FC} from 'react';
import {Dimensions, TextInput, View, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('screen');
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
    width: width / 1.1,
    alignSelf: 'center',
    backgroundColor: '#e3e3e3',
    borderRadius: 5,
    marginVertical: 10,
  },
  input: {
    padding: 15,
  },
});

export default Input;
