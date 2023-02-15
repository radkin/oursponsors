import {useState, useEffect} from 'react';
import {INAJAR_TOKEN, INAJAR_URL} from '@env';
import {StyleSheet, View} from 'react-native';
import {Avatar, Card, Button, Text} from 'react-native-paper';
import {FlatList} from 'react-native';
import { Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';
const {default: axios} = require('axios');

const url = `${INAJAR_URL}/propublica/get_senators`;
console.log(url);
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

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
  const RenderCard = ({value}) => {
    console.log(appState.repos);

    return (
      <Card>
        <Card.Title
          title={`${value.first_name} ${value.last_name}`}
          subtitle={value.title}
          left={LeftContent}
        />
        <Image
          source={{ uri: value.image_url }}
          resizeMode={'cover'}
          width={Dimensions.get('window').width}
        />
      </Card>
    );
  };

  return (
    <FlatList
      isLoading={appState.loading}
      data={appState.repos}
      renderItem={({item}) => <RenderCard value={item} />}
      keyExtractor={item => item.id}
      horizontal={true}
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
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
});

export default CardsFlatlist;
