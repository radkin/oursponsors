import SenatorCardsFlatlist from '../components/senatorCardsFlatlist';
import {StyleSheet, View} from 'react-native';
import React, { FC } from "react";
import { NavigationProp } from "@react-navigation/native";

interface Props {
  navigation: NavigationProp<any>;
}
const Senators: FC<Props> = props => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 2}}>
        <SenatorCardsFlatlist navigation={props.navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Senators;
