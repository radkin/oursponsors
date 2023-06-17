import CongressCardsFlatlist from '../components/congressCardsFlatlist';
import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {NavigationProp} from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const Congress: FC<Props> = props => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 2}}>
        <CongressCardsFlatlist navigation={props.navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Congress;
