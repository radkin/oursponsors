import {useEffect} from 'react';

import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native';
import * as React from 'react';
import RenderRepCard from './RenderRepCard';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';

import {useDispatch, useSelector} from 'react-redux';
import { getCongress, getCongressByState } from "../store/actions/congressAction";

function renderCongress(props) {
  const dispatch = useDispatch();
  const congressListData = useSelector(state => state.congressList);
  const {congress} = congressListData;
  let byState = true;

  if (byState) {
    useEffect(() => {
      dispatch(getCongressByState());
    }, [dispatch]);
  } else {
    useEffect(() => {
      dispatch(getCongress());
    }, [dispatch]);
  }

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
            <RenderRepCard value={item} />
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
      horizontal={false}
    />
  );
}

function CardsFlatlist(props): JSX.Element {
  return <View style={styles.container}>{renderCongress(props)}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: responsiveScreenHeight(18.9),
  },
});

export default CardsFlatlist;
