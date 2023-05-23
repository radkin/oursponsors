import {useEffect} from 'react';
import {getSenators} from '../store/actions/senatorAction';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import RenderRepCard from './RenderRepCard';
import * as React from 'react';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';
import {useAppDispatch, useAppSelector} from '../hooks';
import { scale } from "react-native-size-matters";

function RenderSenators(props) {
  const dispatch = useAppDispatch();
  const senatorsListData = useAppSelector(state => state.senatorsList);
  const {senators} = senatorsListData;

  useEffect(() => {
    dispatch(getSenators());
  }, [dispatch]);

  const navigation = props.navigation;

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
            <RenderRepCard value={item} />
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
    height: scale(50),
  },
});
export default RenderSenators;
