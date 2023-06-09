import React, {FC} from 'react';
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Button } from "./index";

const {height, width} = Dimensions.get('screen');

interface Props {
  msg: string;
  approved: string;
  timeStamp: number;
  onApprove: () => void;
  onReject: () => void;
}

const RenderPendingPost : FC <Props> = (props) => {

  const formatTime = (timeStamp: number): string => {
    const calculatedTime = Date.now() - timeStamp;
    if (calculatedTime > 1000) return `${calculatedTime / 1000} s`;
    if ((calculatedTime / 1000) > 60 ) return `${(calculatedTime / 1000) / 60} min`;
    if (((calculatedTime / 1000) / 60 ) > 60 ) return `${calculatedTime / 60 } hr`;
    else return `${(((calculatedTime / 1000) / 60 ) > 60 ) / 24} d`;
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>{props.msg}</Text>
        <Text>{formatTime(props.timeStamp)}</Text>
      </View>
      <View>
        <Button title="Approve" onPress={props.onApprove} />
        <Button title="Decline" onPress={props.onReject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 1.1,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: '#ccc',
    shadowOpacity: 0.9,
  },
});

export default RenderPendingPost;
