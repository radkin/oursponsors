import React from 'react';
import {View} from 'react-native';
import PreferencesForm from '../PreferencesCards';

function PreferencesScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <PreferencesForm {...props} />
    </View>
  );
}

export default PreferencesScreen;
