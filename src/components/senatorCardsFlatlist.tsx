import {StyleSheet, View} from 'react-native';
import * as React from 'react';
import renderSenators from './renderSenators';

function SenatorCardsFlatlist(props): JSX.Element {
  return <View style={styles.container}>{renderSenators(props)}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default SenatorCardsFlatlist;
