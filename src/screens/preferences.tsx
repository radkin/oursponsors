import React, {FC} from 'react';
import {View} from 'react-native';
import PreferencesCards from '../components/preferencesCards';

const Preferences: FC = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <PreferencesCards />
    </View>
  );
};

export default Preferences;
