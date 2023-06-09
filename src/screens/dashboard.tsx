import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import {FC, useEffect, useState} from 'react';

import {RenderPendingPost} from '../components';
import {db} from '../constants/firebase';
import React from 'react';

const Dashboard: FC = () => {
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

  const onApprove = (id: string) => {
    Alert.alert(`item of id:${id} will be approved`);
  };

  const onReject = (id: string) => {
    Alert.alert(`item of id:${id} will be rejected`);
  };

  return (
    <View style={styles.container}>
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
