import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {Button, Input} from '../components';
import {auth, db} from '../constants/firebase';

const Home: FC = props => {
  const [msg, setMsg] = useState<string | null>(null);
  const [firebaseUser, setFirebaseUser] = useState<any>(null);
  const signOut = () => {
    auth.signOut();
  };

  const fetchCurrentUser = async () => {
    const uid = auth.currentUser?.uid;
    const user = await db.collection('users').doc(uid).get();
    setFirebaseUser({id: (await user).id, ...user.data()});
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const post = async () => {
    if (msg) {
      const data = {
        msg,
        timeStamp: Date.now(),
        approved: false,
      };
      try {
        await db.collection('posts').add(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert('Missing Fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button title="Sign out" onPress={signOut} />
      <View>
        <Input
          placeholder="Write something here"
          onChangeText={text => setMsg(text)}
        />
        <Button title="Post" onPress={post} />
      </View>
      {firebaseUser ? (
        firebaseUser.isAdmin ? (
          <View>
            <Button
              title="Dashboard"
              onPress={() => props.navigation.navigate('dashboard')}
            />
          </View>
        ) : null
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
