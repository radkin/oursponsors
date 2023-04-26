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
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {useAppDispatch, useAppSelector} from '../hooks';

function PreferencesCards({setPreferences}) {
  const dispatch = useAppDispatch();
  const preferencesListData = useAppSelector(state => state.preferencesList);
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
            left={() => <Icon name="tasks" size={24} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              style={styles.cardSwitchStyle}
              value={preferences.my_state_only}
              onValueChange={value => setPreferences('my_state_only', value)}
            />
          </Card.Content>
        </Card>

        <Card style={styles.singleCard}>
          <Card.Title
            title="My Party Only"
            titleStyle={styles.cardTitleStyle}
            left={() => <Icon name="tasks" size={24} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              style={styles.cardSwitchStyle}
              value={preferences.my_party_only}
              onValueChange={value => setPreferences('my_party_only', value)}
            />
          </Card.Content>
        </Card>

        <Divider horizontalInset={true} style={{height: 10}} />

        <Card title="Card Title">
          <Text style={styles.paragraph}>Specific Member Details</Text>
        </Card>

        <Card style={styles.singleCard}>
          <Card.Title
            title="Hide Twitter"
            titleStyle={styles.cardTitleStyle}
            left={() => <Icon name="tasks" size={24} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              style={styles.cardSwitchStyle}
              value={preferences.twitter_hide}
              onValueChange={value => setPreferences('twitter_hide', value)}
            />
          </Card.Content>
        </Card>

        <Card style={styles.singleCard}>
          <Card.Title
            title="Hide Facebook"
            titleStyle={styles.cardTitleStyle}
            left={() => <Icon name="tasks" size={24} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              style={styles.cardSwitchStyle}
              value={preferences.facebook_hide}
              onValueChange={value => setPreferences('facebook_hide', value)}
            />
          </Card.Content>
        </Card>

        <Card style={styles.singleCard}>
          <Card.Title
            title="Hide YouTube"
            titleStyle={styles.cardTitleStyle}
            left={() => <Icon name="tasks" size={24} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              style={styles.cardSwitchStyle}
              value={preferences.youtube_hide}
              onValueChange={value => setPreferences('youtube_hide', value)}
            />
          </Card.Content>
        </Card>

        <Card style={styles.singleCard}>
          <Card.Title
            title="Hide Google Entity"
            titleStyle={styles.cardTitleStyle}
            left={() => <Icon name="tasks" size={24} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              style={styles.cardSwitchStyle}
              value={preferences.google_entity_hide}
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
            left={() => <Icon name="tasks" size={24} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              style={styles.cardSwitchStyle}
              value={preferences.cspan_hide}
              onValueChange={value => setPreferences('cspan_hide', value)}
            />
          </Card.Content>
        </Card>

        <Card style={styles.singleCard}>
          <Card.Title
            title="Hide Gov Track"
            titleStyle={styles.cardTitleStyle}
            left={() => <Icon name="tasks" size={24} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              style={styles.cardSwitchStyle}
              value={preferences.gov_track_hide}
              onValueChange={value => setPreferences('gov_track_hide', value)}
            />
          </Card.Content>
        </Card>

        <Card style={styles.singleCard}>
          <Card.Title
            title="Hide Open Secrets"
            titleStyle={styles.cardTitleStyle}
            left={() => <Icon name="tasks" size={24} color="black" />}
          />
          <Card.Content style={styles.cardContent}>
            <Switch
              style={styles.cardSwitchStyle}
              value={preferences.open_secrets_hide}
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
            left={() => <Icon name="tasks" size={24} color="black" />}
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
            left={() => <Icon name="tasks" size={24} color="black" />}
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
            left={() => <Icon name="tasks" size={24} color="black" />}
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
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
    padding: 10,
    width: responsiveScreenWidth(90),
  },
  paragraph: {
    margin: 24,
    fontSize: responsiveScreenFontSize(3),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  singleCard: {
    margin: 3,
    height: responsiveScreenHeight(7),
    position: 'relative',
  },
  cardTitleStyle: {
    fontSize: responsiveScreenFontSize(2),
    paddingTop: responsiveScreenHeight(2.5),
    position: 'relative',
    bottom: '17%',
  },
  cardSwitchStyle: {
    fontSize: responsiveScreenFontSize(2),
    paddingTop: responsiveScreenHeight(2.5),
    position: 'relative',
    top: '17%',
    transform: [
      {scaleX: responsiveScreenFontSize(0.08)},
      {scaleY: responsiveScreenFontSize(0.08)},
    ],
  },
});

const mapStateToProps = state => ({
  preferences: state.preferences,
});

const mapDispatchToProps = {
  setPreferences,
};

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesCards);
