import {FC, useEffect} from 'react';
import {getMiniCongress} from '../store/actions/miniCongressAction';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RepCard from './repCard';
import * as React from 'react';
import {scale} from 'react-native-size-matters';
import {useTypedDispatch, useTypedSelector} from '../store/store';
import {NavigationProp} from '@react-navigation/native';
import { MiniCongress } from "../models/MiniCongress";

interface Props {
  navigation: NavigationProp<any>;
}

interface TheMiniCongress {
  miniCongress: MiniCongress[];
}
const RenderCongress: FC<Props> = props => {
  const dispatch = useTypedDispatch();
  const miniCongressListData: TheMiniCongress = useTypedSelector(
    state => state.miniCongressList,
  );
  const {miniCongress} = miniCongressListData;

  useEffect(() => {
    dispatch(getMiniCongress());
  }, [dispatch]);
  
  const navigation = props.navigation;

  if (miniCongress === undefined || miniCongress.length == 0) {
    return (
      <View style={styles.noCongress}>
        <Text>Unable to display Congress</Text>
        <Text>It is likely you are filtering all of them</Text>
      </View>
    );
  } else {
    return (
      <FlatList
        data={miniCongress}
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
        horizontal={false}
      />
    );
  }
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: scale(4),
    borderWidth: scale(2),
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: scale(150),
  },
  noCongress: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default RenderCongress;
