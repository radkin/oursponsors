import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import {FC, useEffect, useState} from 'react';

import {RenderPendingPost} from '../components';
import {db} from '../constants/firebase';
import React from 'react';
import Button from "../components/button";

const Dashboard: FC = (props) => {
  const [posts, setPosts] = useState<any>(null);
  const fetchPendingPosts = async () => {
    const posts = await db
      .collection('posts')
      .where('approved', '==', false)
      .get();
    setPosts([...posts.docs]);
  };

  useEffect(() => {
    fetchPendingPosts();
  }, []);

  const onApprove = async (id: string) => {
    const post = await db.collection('posts')
      .doc(id)
      .get();
    post.ref.set({approved: true}, {merge: true});
  }

  const onReject = async (id: string) => {
    await db.collection('posts')
      .doc(id)
      .delete();
  };

  // ToDo: fix return only shows correct Array.length() and id no msg or timeStamp.
  return (
    <View style={styles.container}>
      <Button title="Back" onPress={() => props.navigation.goBack()} />
      <Text>Dashboard screen</Text>
      <View style={{height: '50%'}}>
        <FlatList
          data={posts}
          renderItem={({item}) => (
            <RenderPendingPost
              msg={item.msg}
              approved={item.approved}
              timeStamp={item.timeStamp}
              onApprove={() => onApprove(item.id)}
              onReject={() => onReject(item.id)}
            />
          )}
        />
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
});

export default Dashboard;
