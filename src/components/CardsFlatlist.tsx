import {useState, useEffect} from 'react';
import {INAJAR_TOKEN, INAJAR_URL} from '@env';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native';
import * as React from 'react';
import RenderCard from "./RenderCard";
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';

const {default: axios} = require('axios');
const url = `${INAJAR_URL}/propublica/get_senators`;
const instance = axios.create({
  baseURL: url,
  timeout: 1000,
  headers: {'INAJAR-TOKEN': INAJAR_TOKEN},
});

function renderSenators() {
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({loading: true});
    instance.get().then(repos => {
      const allRepos = repos.data;
      setAppState({loading: false, repos: allRepos});
    });
  }, [setAppState]);

  return (
    <FlatList
      isLoading={appState.loading}
      data={appState.repos}
      renderItem={({item}) =>
        <View style={styles.card}>
          <RenderCard value={item}  />
        </View>
      }
      keyExtractor={item => item.id}
      horizontal={false}
    />
  );
}

function CardsFlatlist(): JSX.Element {
  return <View style={styles.container}>{renderSenators()}</View>;
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
