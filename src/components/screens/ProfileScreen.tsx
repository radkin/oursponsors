import React, { useEffect, useRef, useState } from "react";

import {useAppDispatch, useAppSelector} from '../../hooks';
import {connect} from 'react-redux';
import {getUser, setUser} from '../../store/actions/userAction';
import { View, SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity, Alert } from "react-native";
import { Controller, useForm } from "react-hook-form";

function ProfileScreen() {
  const dispatch = useAppDispatch();
  const userObjectData = useAppSelector(state => state.userObject);
  const {user} = userObjectData;

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  console.log(user);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <Controller
          control={control}
          name="first_name"
          render={({field: {onChange, value}}) => (
            <View style={styles.textBox}>
              <TextInput
                editable
                multiline
                numberOfLines={4}
                maxLength={40}
                onChangeText={text => onChange(text)}
                value={value}
                defaultValue={user.first_name}
                style={{padding: 10}}
              />
            </View>
          )}
          rules={{
            required: {
              value: true,
              message: 'Please fill out all required fields.',
            },
          }}
        />

        {errors.name?.message ? (
          <Text style={styles.errorText}>{errors.name?.message}</Text>
        ) : null}

      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(formValue =>
            Alert.alert('Form Value', JSON.stringify(formValue)),
          )}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
        );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  container: {
    width: '90%',
  },
  textBox: {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    paddingStart: 5,
    borderColor: '#e4e4e4',
    borderWidth: 1,
    alignSelf: 'stretch',
    marginVertical: 7,
  },
  text: {
    fontSize: 15,
    paddingVertical: 10,
  },
  errorText: {
    color: 'red',
  },
  dropdown: {
    borderColor: '#e4e4e4',
    backgroundColor: '#fafafa',
    marginVertical: 10,
  },
  dropdownPlaceholder: {
    color: '#c7c7c8',
  },
  button: {
    width: '100%',
    backgroundColor: '#517CFF',
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
  },
});

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
