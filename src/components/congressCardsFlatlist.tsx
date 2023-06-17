import {StyleSheet, View} from 'react-native';
import * as React from 'react';

import RenderCongress from './renderCongress';
import {NavigationProp} from '@react-navigation/native';
import {FC} from 'react';

interface Props {
  navigation: NavigationProp<any>;
}
const CardsFlatlist: FC<Props> = props => {
  return <View style={styles.container}>{RenderCongress(props)}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default CardsFlatlist;
