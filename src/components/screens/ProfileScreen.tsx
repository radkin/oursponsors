import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useController, useForm} from 'react-hook-form';
import {Button, Checkbox, List, TextInput} from 'react-native-paper';
import {FormBuilder} from 'react-native-paper-form-builder';
import {LogicProps} from 'react-native-paper-form-builder/dist/Types/Types';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {connect} from 'react-redux';
import {getUser} from '../../store/actions/userAction';

function ProfileScreen({value}) {
  const dispatch = useAppDispatch();
  const userObjectData = useAppSelector(state => state.userObject);
  const {user} = userObjectData;

  const [internalState, setInternalState] = useState(value);

  const previousValueRef = useRef();
  const previousValue = previousValueRef.current;
  if (value !== previousValue && value !== internalState) {
    setInternalState(value);
  }

  useEffect(() => {
    previousValueRef.current = value;
    dispatch(getUser());
  }, [dispatch]);

  console.log(user);

  const {control, setFocus, handleSubmit} = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      state: '',
      gender: '',
      party: '',
      rememberMe: 'checked',
    },
    mode: 'onChange',
  });

  return (
    <View style={styles.containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray={[
            [
              {
                name: 'firstName',
                type: 'text',
                textInputProps: {
                  label: 'First Name',
                  left: <TextInput.Icon name={'account'} />,
                },
                rules: {
                  required: {
                    value: true,
                    message: 'First name is required',
                  },
                },
                flex: 1.5,
              },
              {
                name: 'lastName',
                type: 'text',
                textInputProps: {
                  label: 'Last Name',
                  left: <TextInput.Icon name={'account'} />,
                },
                rules: {
                  required: {
                    value: true,
                    message: 'Last name is required',
                  },
                },
                flex: 1,
              },
            ],
            {
              name: 'email',
              type: 'email',
              textInputProps: {
                label: 'Email',
                left: <TextInput.Icon name={'email'} />,
              },
              rules: {
                required: {
                  value: true,
                  message: 'Email is required',
                },
                pattern: {
                  value:
                    /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/,
                  message: 'Email is invalid',
                },
              },
            },
            {
              name: 'password',
              type: 'password',
              textInputProps: {
                label: 'Password',
                left: <TextInput.Icon name={'lock'} />,
              },
              rules: {
                required: {
                  value: true,
                  message: 'Password is required',
                },
                minLength: {
                  value: 8,
                  message: 'Password should be atleast 8 characters',
                },
                maxLength: {
                  value: 30,
                  message: 'Password should be between 8 and 30 characters',
                },
              },
            },
            {
              name: 'state',
              type: 'autocomplete',
              textInputProps: {
                label: 'State',
                left: <TextInput.Icon name={'office-building'} />,
              },
              rules: {
                required: {
                  value: true,
                  message: 'State is required',
                },
              },
              options: [
                {
                  label: 'California',
                  value: 1,
                },
                {
                  label: 'Idaho',
                  value: 2,
                },
                {
                  label: 'Colorado',
                  value: 3,
                },
                {
                  label: 'Texas',
                  value: 4,
                },
                {
                  label: 'New York',
                  value: 5,
                },
                {
                  label: 'Utah',
                  value: 6,
                },
                {
                  label: 'Arizona',
                  value: 7,
                },
                {
                  label: 'Florida',
                  value: 8,
                },
              ],
            },
            {
              name: 'gender',
              type: 'select',
              textInputProps: {
                label: 'Gender',
                left: <TextInput.Icon name={'account'} />,
              },
              rules: {
                required: {
                  value: true,
                  message: 'Gender is required',
                },
              },
              options: [
                {
                  value: 0,
                  label: 'Female',
                },
                {
                  value: 1,
                  label: 'Male',
                },
                {
                  value: 2,
                  label: 'Others',
                },
              ],
            },
            {
              name: 'party',
              type: 'select',
              textInputProps: {
                label: 'Party',
                left: <TextInput.Icon name={'account'} />,
              },
              rules: {
                required: {
                  value: true,
                  message: 'Party is required',
                },
              },
              options: [
                {
                  value: 0,
                  label: 'Independent',
                },
                {
                  value: 1,
                  label: 'Democrat',
                },
                {
                  value: 2,
                  label: 'Republican',
                },
              ],
            },
            {
              name: 'rememberMe',
              type: 'custom',
              JSX: TermsCheckBox,
            },
          ]}
        />
        <Button mode={'contained'} onPress={handleSubmit(console.log)}>
          Submit
        </Button>
      </ScrollView>
    </View>
  );
}

function TermsCheckBox(props: LogicProps) {
  const {name, rules, shouldUnregister, defaultValue, control} = props;
  const {field} = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
  });

  return (
    <List.Item
      title={'Remember me'}
      left={() => (
        <Checkbox.Android
          status={field.value}
          onPress={() => {
            field.onChange(field.value === 'checked' ? 'unchecked' : 'checked');
          }}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  scrollViewStyle: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  headingStyle: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 40,
  },
});

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
