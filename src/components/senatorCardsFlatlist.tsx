import {StyleSheet, View} from 'react-native';
import * as React from 'react';
import renderSenators from './renderSenators';
import { NavigationProp } from "@react-navigation/native";
import { FC } from "react";

interface Props {
  navigation: NavigationProp<any>;
}

const SenatorCardsFlatlist: FC<Props> = (props) => {
  return <View style={styles.container}>{renderSenators(props)}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default SenatorCardsFlatlist;
