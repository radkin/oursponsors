import { FC, useEffect } from "react";
import {getCongress} from '../store/actions/congressAction';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import RepCard from './repCard';
import * as React from 'react';
import {scale} from 'react-native-size-matters';
import { useTypedDispatch, useTypedSelector } from "../store/store";
import { NavigationProp } from "@react-navigation/native";

interface Props {
  navigation: NavigationProp<any>;
}
const RenderCongress: FC<Props> = (props) => {
  const dispatch = useTypedDispatch();
  const congressListData = useTypedSelector(state => state.congressList);
  const {congress} = congressListData;

  useEffect(() => {
    dispatch(getCongress());
  }, [dispatch]);

  const navigation = props.navigation;

  return (
    <FlatList
      data={congress}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Details', {
              value: item,
            })
          }>
          <View style={styles.card}>
            <RepCard value={item} />
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
      horizontal={false}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: scale(150),
  },
});
export default RenderCongress;
