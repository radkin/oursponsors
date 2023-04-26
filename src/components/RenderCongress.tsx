import {useEffect} from 'react';
import {getCongress} from '../store/actions/congressAction';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import RenderRepCard from './RenderRepCard';
import * as React from 'react';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';
import {useAppDispatch, useAppSelector} from '../hooks';

function RenderCongress(props) {
  const dispatch = useAppDispatch();
  const congressListData = useAppSelector(state => state.congressList);
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
    height: responsiveScreenHeight(18.9),
  },
});
export default RenderCongress;
