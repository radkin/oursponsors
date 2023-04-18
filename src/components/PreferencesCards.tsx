import * as React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Card, Switch} from 'react-native-paper';

import {useSelector, connect, useDispatch} from 'react-redux';
import {
  getPreferences,
  updatePreferences,
} from '../store/actions/preferencesAction';
import {useEffect} from 'react';

function PreferencesCards({updatePreferences}) {
  const dispatch = useDispatch();
  const preferencesListData = useSelector(state => state.preferencesList);
  const {preferences} = preferencesListData;

  // ToDo: mapStateToProps is not working. When fixed, remove this hook
  useEffect(() => {
    dispatch(getPreferences());
  }, [dispatch]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Card title="Card Title">
          <Text style={styles.paragraph}>
            These Global Settings will effect all views
          </Text>
        </Card>

        <Card>
          <Card.Title
            title="My State Only"
            left={() => <Icon name="tasks" size={24} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              value={preferences.my_state_only}
              onValueChange={value => updatePreferences('my_state_only', value)}
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Title
            title="My Party Only"
            left={() => <Icon name="tasks" size={24} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              value={preferences.my_party_only}
              onValueChange={value => updatePreferences('my_party_only', value)}
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Title
            title="Twitter Hide"
            left={() => <Icon name="tasks" size={24} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              value={preferences.twitter_hide}
              onValueChange={value => updatePreferences('twitter_hide', value)}
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Title
            title="Facebook Hide"
            left={() => <Icon name="tasks" size={24} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              value={preferences.facebook_hide}
              onValueChange={value => updatePreferences('facebook_hide', value)}
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Title
            title="YouTube Hide"
            left={() => <Icon name="tasks" size={24} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              value={preferences.youtube_hide}
              onValueChange={value => updatePreferences('youtube_hide', value)}
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Title
            title="Google Entity Hide"
            left={() => <Icon name="tasks" size={24} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              value={preferences.google_entity_hide}
              onValueChange={value =>
                updatePreferences('google_entity_hide', value)
              }
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Title
            title="Cspan Hide"
            left={() => <Icon name="tasks" size={24} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              value={preferences.cspan_hide}
              onValueChange={value => updatePreferences('cspan_hide', value)}
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Title
            title="Vote Smart Hide"
            left={() => <Icon name="tasks" size={24} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              value={preferences.vote_smart_hide}
              onValueChange={value =>
                updatePreferences('vote_smart_hide', value)
              }
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Title
            title="Gov Track Hide"
            left={() => <Icon name="tasks" size={24} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              value={preferences.gov_track_hide}
              onValueChange={value =>
                updatePreferences('gov_track_hide', value)
              }
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Title
            title="Open Secrets Hide"
            left={() => <Icon name="tasks" size={24} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              value={preferences.open_secrets_hide}
              onValueChange={value =>
                updatePreferences('open_secrets_hide', value)
              }
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Title
            title="Vote View Hide"
            left={() => <Icon name="tasks" size={24} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              value={preferences.vote_view_hide}
              onValueChange={value =>
                updatePreferences('vote_view_hide', value)
              }
            />
          </Card.Content>
        </Card>

        <Card>
          <Card.Title
            title="FEC Hide"
            left={() => <Icon name="tasks" size={24} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              value={preferences.fec_hide}
              onValueChange={value => updatePreferences('fec_hide', value)}
            />
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

const mapStateToProps = state => ({
  preferences: state.preferences,
});

const mapDispatchToProps = {
  updatePreferences,
};

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesCards);
