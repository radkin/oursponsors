import {FC, useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RepCard from './repCard';
import * as React from 'react';
import {scale} from 'react-native-size-matters';
import {useTypedDispatch, useTypedSelector} from '../store/store';
import {NavigationProp} from '@react-navigation/native';
import { MiniSenator } from "../models/MiniSenator";
import { getMiniSenators } from "../store/actions/miniSenatorAction";

interface Props {
  navigation: NavigationProp<any>;
}

interface MiniSenators {
  miniSenators: MiniSenator[];
}

const RenderSenators: FC<Props> = props => {
  const dispatch = useTypedDispatch();
  const miniSenatorsListData: MiniSenators = useTypedSelector(
    state => state.miniSenatorsList,
  );
  const {miniSenators} = miniSenatorsListData;

  useEffect(() => {
    dispatch(getMiniSenators());
  }, [dispatch]);

  const navigation = props.navigation;

  if (miniSenators === undefined || miniSenators.length == 0) {
    return (
      <View style={styles.noSenators}>
        <Text>Unable to display Senators</Text>
        <Text>It is likely you are filtering all of them</Text>
      </View>
    );
  } else {
    return (
      <FlatList
        data={miniSenators}
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
  noSenators: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default RenderSenators;
