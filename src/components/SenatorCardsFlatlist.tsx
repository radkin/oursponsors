import {useEffect} from 'react';

import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native';
import * as React from 'react';
import RenderRepCard from './RenderRepCard';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';

import {useDispatch, useSelector} from 'react-redux';
import {getSenators} from '../store/actions/senatorAction';

function renderSenators(props) {
  const dispatch = useDispatch();
  const senatorsListData = useSelector(state => state.senatorsList);
  const {senators} = senatorsListData;

  useEffect(() => {
    dispatch(getSenators());
  }, [dispatch]);

  // console.log(senators);
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

function SenatorCardsFlatlist(props): JSX.Element {
  return <View style={styles.container}>{renderSenators(props)}</View>;
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

export default SenatorCardsFlatlist;
