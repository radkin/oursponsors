import { FC, useEffect } from "react";
import {getSenators} from '../store/actions/senatorAction';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RepCard from './repCard';
import * as React from 'react';
import {scale} from 'react-native-size-matters';
import {useTypedDispatch, useTypedSelector} from '../store/store';
import { NavigationProp } from "@react-navigation/native";

interface Props {
  navigation: NavigationProp<any>;
}

const RenderSenators: FC<Props> = (props) => {
  const dispatch = useTypedDispatch();
  const senatorsListData = useTypedSelector(state => state.senatorsList);
  const {senators} = senatorsListData;

  useEffect(() => {
    dispatch(getSenators());
  }, [dispatch]);

  const navigation = props.navigation;

  if (senators === undefined || senators.length == 0) {
    return (
      <View style={styles.noSenators}>
        <Text>Unable to display Senators</Text>
        <Text>It is likely you are filtering all of them</Text>
      </View>
    );
  } else {
    return (
      <FlatList
        data={senators}
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
  noSenators: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default RenderSenators;
