import React from 'react';
import {View} from 'react-native';
import PreferencesCards from '../PreferencesCards';

function PreferencesScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <PreferencesCards {...props} />
    </View>
  );
}

export default PreferencesScreen;
