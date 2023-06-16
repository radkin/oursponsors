import CongressCardsFlatlist from '../components/congressCardsFlatlist';
import {StyleSheet, View} from 'react-native';
import React from 'react';

function Congress(props) {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Congress;
