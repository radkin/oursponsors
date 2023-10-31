import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { FC, useState } from 'react';
import { Input, Button } from '../components';
import React from 'react';
import { auth, db } from '../constants/firebase';
import { NavigationProp } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';
import store from '../store/store';
import { createOrUpdateUser } from '../store/actions/userAction';
import { User } from './../models/User';

interface Props {
  navigation: NavigationProp<any>;
}

const Signup: FC<Props> = (props) => {
    const [name, setName] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    const signup = async () => {
        if (name && email && password) {
            try {
                const firebaseUser = await auth.createUserWithEmailAndPassword(email, password);
                if (firebaseUser) {
                    const uid = await db.collection('users').doc(firebaseUser.user?.uid).set({ name, email, password });
                    store.dispatch({
                        type: 'SET_GOOGLE_UID',
                        payload: uid,
                    });

                    const split_name = name.split(' ');
                    let uProfile: User = {
                        email: email,
                        first_name: split_name[0],
                        last_name: split_name[1],
                    };

                    await store.dispatch(createOrUpdateUser(uProfile, firebaseUser.user?.uid));
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            Alert.alert('Error', 'missing fields');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.loginText}>sign up screen</Text>
            <Input placeholder={'Name'} onChangeText={(text) => setName(text)} />
            <Input placeholder={'Email'} onChangeText={(text) => setEmail(text)} />
            <Input placeholder={'Password'} secureTextEntry onChangeText={(text) => setPassword(text)} />
            <Button title="Sign up" onPress={signup} />
            <View style={styles.loginText}>
                <Text style={{ marginHorizontal: scale(5), fontSize: scale(10) }}>Already Have an Account?</Text>
                <TouchableOpacity style={{ marginHorizontal: scale(5) }} onPress={() => props.navigation.navigate('login')}>
                    <Text style={{ color: 'rgba(81,135,200,1)', fontSize: scale(10) }}>Login Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        flexDirection: 'row',
        marginVertical: scale(20),
        fontSize: scale(10),
    },
});

export default Signup;
