import {StyleSheet, View} from 'react-native';
import * as React from 'react';

import RenderCongress from './renderCongress';

function CardsFlatlist(props): JSX.Element {
  return <View style={styles.container}>{RenderCongress(props)}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default CardsFlatlist;
