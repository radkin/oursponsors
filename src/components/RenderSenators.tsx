import {useEffect} from 'react';
import {getSenators} from '../store/actions/senatorAction';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import RenderRepCard from './RenderRepCard';
import * as React from 'react';
import {scale} from 'react-native-size-matters';
import store, {useTypedDispatch, useTypedSelector} from '../store/store';

function RenderSenators(props) {
  const dispatch = useTypedDispatch();
  const senatorsListData = useTypedSelector(state => state.senatorsList);
  const {senators} = senatorsListData;

  useEffect(() => {
    dispatch(getSenators());
  }, [dispatch]);

  const navigation = props.navigation;

  // ToDo: conditional render for senators empty due to filters
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
    height: scale(150),
  },
});
export default RenderSenators;
