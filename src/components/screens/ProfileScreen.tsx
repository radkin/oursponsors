import React, {useEffect, useRef, useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {connect} from 'react-redux';
import {getUser, setUser} from '../../store/actions/userAction';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import DropDownPicker from 'react-native-dropdown-picker';

function ProfileScreen() {
  const dispatch = useAppDispatch();
  const userObjectData = useAppSelector(state => state.userObject);
  const {user} = userObjectData;

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const [genderListOpen, setGenderListOpen] = useState(false);

  const genderData = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Nonbinary', value: 'nonbinary'},
  ];

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  console.log(user);

  if (user) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Controller
            control={control}
            name="first_name"
            render={({field: {onChange, value}}) => (
              <View style={styles.textBox}>
                <TextInput
                  placeholder="First Name"
                  editable
                  numberOfLines={1}
                  maxLength={20}
                  onChangeText={text => onChange(text)}
                  value={value}
                  defaultValue={user.first_name}
                  style={styles.textBox}
                />
              </View>
            )}
            rules={{
              required: {
                value: false,
                message: 'Please fill out all required fields.',
              },
            }}
          />
          {errors.first_name?.message ? (
            <Text style={styles.errorText}>{errors.first_name?.message}</Text>
          ) : null}

          <Controller
            control={control}
            name="last_name"
            render={({field: {onChange, value}}) => (
              <View style={styles.textBox}>
                <TextInput
                  placeholder="Last Name"
                  editable
                  numberOfLines={1}
                  maxLength={20}
                  onChangeText={text => onChange(text)}
                  value={value}
                  defaultValue={user.last_name}
                  style={styles.textBox}
                />
              </View>
            )}
            rules={{
              required: {
                value: false,
                message: 'Please fill out all required fields.',
              },
            }}
          />
          {errors.last_name?.message ? (
            <Text style={styles.errorText}>{errors.last_name?.message}</Text>
          ) : null}

          <Controller
            control={control}
            name="email"
            render={({field: {onChange, value}}) => (
              <View style={styles.textBox}>
                <TextInput
                  placeholder="Email"
                  editable
                  numberOfLines={1}
                  maxLength={40}
                  onChangeText={text => onChange(text)}
                  value={value}
                  defaultValue={user.email}
                  style={styles.textBox}
                />
              </View>
            )}
            rules={{
              required: {
                value: false,
                message: 'Please fill out all required fields.',
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter valid email.',
              },
            }}
          />
          {errors.email?.message ? (
            <Text style={styles.errorText}>{errors.email?.message}</Text>
          ) : null}

          <Controller
            control={control}
            name="gender"
            render={({field: {onChange, value}}) => (
              <DropDownPicker
                style={styles.dropdown}
                placeholder="Select your gender"
                placeholderStyle={styles.dropdownPlaceholder}
                open={genderListOpen}
                setOpen={() => setGenderListOpen(!genderListOpen)}
                items={genderData}
                value={value}
                setValue={item => onChange(item())}
              />
            )}
            rules={{
              required: {
                value: false,
                message: 'Please fill out all required fields.',
              },
            }}
          />
          {errors.gender?.message ? (
            <Text style={styles.errorText}>{errors.gender?.message}</Text>
          ) : null}
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(formValue => dispatch(setUser(formValue)))}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
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
