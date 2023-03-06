import SimpleCarousel from '../SimpleCarousel';
import CardsFlatlist from "../CardsFlatlist";
import { StyleSheet, View } from "react-native";
import React from "react";

function RepsScreen(props) {

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      {/*
      <View style={{flex: 1, alignItems:'center'}} >
        <SimpleCarousel />
      </View>
      */}
      <View style={{flex: 2}}>
        <CardsFlatlist navigation={props.navigation} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default  RepsScreen;
