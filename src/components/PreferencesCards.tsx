import * as React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Card, Switch, Divider} from 'react-native-paper';

import {connect} from 'react-redux';
import {
  getPreferences,
  setPreferences,
} from '../store/actions/preferencesAction';
import {useEffect} from 'react';
import {scale} from 'react-native-size-matters';
import { useTypedDispatch, useTypedSelector } from "../store/store";

function PreferencesCards({setPreferences}) {
  const dispatch = useTypedDispatch();
  const preferencesListData = useTypedSelector(state => state.preferencesList);
  const {preferences} = preferencesListData;

  // ToDo: mapStateToProps is not working. When fixed, remove this hook
  useEffect(() => {
    dispatch(getPreferences());
  }, [dispatch]);

  // ToDo: "vote_view, vote_smart, fec are not working. Uncomment when fixed
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card title="Card Title">
          <Text style={styles.paragraph}>Representative Filtering</Text>
        </Card>

        <Card style={styles.singleCard}>
          <Card.Title
            title="My State Only"
            titleStyle={styles.cardTitleStyle}
            left={() => <Icon name="tasks" size={scale(24)} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              style={styles.cardSwitchStyle}
              value={preferences['my_state_only']}
              onValueChange={value => setPreferences('my_state_only', value)}
            />
          </Card.Content>
        </Card>

        <Card style={styles.singleCard}>
          <Card.Title
            title="My Party Only"
            titleStyle={styles.cardTitleStyle}
            left={() => <Icon name="tasks" size={scale(24)} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              style={styles.cardSwitchStyle}
              value={preferences['my_party_only']}
              onValueChange={value => setPreferences('my_party_only', value)}
            />
          </Card.Content>
        </Card>

        <Divider horizontalInset={true} style={{height: scale(10)}} />

        <Card title="Card Title">
          <Text style={styles.paragraph}>Specific Member Details</Text>
        </Card>

        <Card style={styles.singleCard}>
          <Card.Title
            title="Hide Twitter"
            titleStyle={styles.cardTitleStyle}
            left={() => <Icon name="tasks" size={scale(24)} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              style={styles.cardSwitchStyle}
              value={preferences['twitter_hide']}
              onValueChange={value => setPreferences('twitter_hide', value)}
            />
          </Card.Content>
        </Card>

        <Card style={styles.singleCard}>
          <Card.Title
            title="Hide Facebook"
            titleStyle={styles.cardTitleStyle}
            left={() => <Icon name="tasks" size={scale(24)} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              style={styles.cardSwitchStyle}
              value={preferences['facebook_hide']}
              onValueChange={value => setPreferences('facebook_hide', value)}
            />
          </Card.Content>
        </Card>

        <Card style={styles.singleCard}>
          <Card.Title
            title="Hide YouTube"
            titleStyle={styles.cardTitleStyle}
            left={() => <Icon name="tasks" size={scale(24)} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              style={styles.cardSwitchStyle}
              value={preferences['youtube_hide']}
              onValueChange={value => setPreferences('youtube_hide', value)}
            />
          </Card.Content>
        </Card>

        <Card style={styles.singleCard}>
          <Card.Title
            title="Hide Google Entity"
            titleStyle={styles.cardTitleStyle}
            left={() => <Icon name="tasks" size={scale(24)} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              style={styles.cardSwitchStyle}
              value={preferences['google_entity_hide']}
              onValueChange={value =>
                setPreferences('google_entity_hide', value)
              }
            />
          </Card.Content>
        </Card>

        <Card style={styles.singleCard}>
          <Card.Title
            title="Hide Cspan"
            titleStyle={styles.cardTitleStyle}
            left={() => <Icon name="tasks" size={scale(24)} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              style={styles.cardSwitchStyle}
              value={preferences['cspan_hide']}
              onValueChange={value => setPreferences('cspan_hide', value)}
            />
          </Card.Content>
        </Card>

        <Card style={styles.singleCard}>
          <Card.Title
            title="Hide Gov Track"
            titleStyle={styles.cardTitleStyle}
            left={() => <Icon name="tasks" size={scale(24)} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              style={styles.cardSwitchStyle}
              value={preferences['gov_track_hide']}
              onValueChange={value => setPreferences('gov_track_hide', value)}
            />
          </Card.Content>
        </Card>

        <Card style={styles.singleCard}>
          <Card.Title
            title="Hide Open Secrets"
            titleStyle={styles.cardTitleStyle}
            left={() => <Icon name="tasks" size={scale(24)} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              style={styles.cardSwitchStyle}
              value={preferences['open_secrets_hide']}
              onValueChange={value =>
                setPreferences('open_secrets_hide', value)
              }
            />
          </Card.Content>
        </Card>
        {/*
        <Card style={styles.singleCard}>
          <Card.Title
            title="Hide Vote View"
            titleStyle={styles.cardTitleStyle}
            left={() => <Icon name="tasks" size={scale(24)} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              style={styles.cardSwitchStyle}
              value={preferences.vote_view_hide}
              onValueChange={value => setPreferences('vote_view_hide', value)}
            />
          </Card.Content>
        </Card>

        <Card style={styles.singleCard}>
          <Card.Title
            title="Hide Vote Smart"
            titleStyle={styles.cardTitleStyle}
            left={() => <Icon name="tasks" size={scale(24)} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              style={styles.cardSwitchStyle}
              value={preferences.vote_smart_hide}
              onValueChange={value => setPreferences('vote_smart_hide', value)}
            />
          </Card.Content>
        </Card>

        <Card style={styles.singleCard}>
          <Card.Title
            title="Hide FEC"
            titleStyle={styles.cardTitleStyle}
            left={() => <Icon name="tasks" size={scale(24)} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              style={styles.cardSwitchStyle}
              value={preferences.fec_hide}
              onValueChange={value => setPreferences('fec_hide', value)}
            />
          </Card.Content>
        </Card>
        */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scale(10),
    backgroundColor: '#ecf0f1',
    padding: scale(3),
    width: scale(300),
  },
  paragraph: {
    margin: scale(20),
    fontSize: scale(20),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  singleCard: {
    margin: scale(2.5),
    height: scale(50),
    position: 'relative',
  },
  cardTitleStyle: {
    fontSize: scale(15),
    paddingTop: scale(19),
    position: 'relative',
    bottom: '17%',
  },
  cardSwitchStyle: {
    paddingTop: scale(15),
    position: 'relative',
    top: '17%',
    transform: [{scaleX: scale(0.7)}, {scaleY: scale(0.7)}],
  },
});

const mapStateToProps = state => ({
  preferences: state.preferences,
});

const mapDispatchToProps = {
  setPreferences,
};

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesCards);
