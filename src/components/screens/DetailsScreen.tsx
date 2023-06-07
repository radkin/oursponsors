import {
  View,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Animated,
  TextStyle,
} from 'react-native';
import React, {useEffect} from 'react';
import {Divider, List, MD3Colors, Surface, Text} from 'react-native-paper';
import RenderRepDetailsTable from '../RenderRepSectorsTable';
import RenderRepContributorsTable from '../RenderRepContributorsTable';
import ScrollView = Animated.ScrollView;
import {getPreferences} from '../../store/actions/preferencesAction';
import {useAppDispatch, useAppSelector} from '../../hooks';
import RenderSmallRepCard from '../RenderSmallRepCard';
import {scale} from 'react-native-size-matters';

function DetailsScreen({route}) {
  const dispatch = useAppDispatch();
  const preferencesListData = useAppSelector(state => state.preferencesList);
  const {preferences} = preferencesListData;

  useEffect(() => {
    dispatch(getPreferences());
  }, [dispatch]);

  const {value} = route.params;
  return (
    <View style={{paddingBottom: scale(450)}}>
      <View style={styles.card}>
        <RenderSmallRepCard value={value} />
      </View>

      <View style={styles.table}>
        <RenderRepDetailsTable value={value} />
      </View>

      <View style={styles.table}>
        <RenderRepContributorsTable value={value} />
      </View>

      <ScrollView style={{paddingTop: scale(5)}}>
        <View>
          {value.twitter_account && !preferences['twitter_hide'] && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `https://twitter.com/${value.twitter_account}`,
                  )
                }>
                <List.Icon
                  color={MD3Colors.primary40}
                  icon="twitter"
                  style={styles.surfaceIcon}
                />
                <Text style={styles.surfaceText} variant="titleMedium">
                  Twitter
                </Text>
              </TouchableOpacity>
            </Surface>
          )}
          {value.facebook_account && !preferences['facebook_hide'] && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `https://facebook.com/${value.facebook_account}`,
                  )
                }>
                <List.Icon
                  color={MD3Colors.primary40}
                  icon="facebook"
                  style={styles.surfaceIcon}
                />
                <Text style={styles.surfaceText} variant="titleMedium">
                  Facebook
                </Text>
              </TouchableOpacity>
            </Surface>
          )}
          {value.youtube_account && !preferences['youtube_hide'] && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `https://youtube.com/${value.youtube_account}`,
                  )
                }>
                <List.Icon
                  color={MD3Colors.primary40}
                  icon="youtube"
                  style={styles.surfaceIcon}
                />
                <Text
                  style={styles.surfaceText as TextStyle}
                  variant="titleMedium">
                  YouTube
                </Text>
              </TouchableOpacity>
            </Surface>
          )}
          {value.google_entity_id && !preferences['google_entity_hide'] && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `https://www.google.com/search?kgmid=${value.google_entity_id}`,
                  )
                }>
                <List.Icon
                  color={MD3Colors.primary40}
                  icon="google"
                  style={styles.surfaceIcon}
                />
                <Text
                  style={styles.surfaceText as TextStyle}
                  variant="titleMedium">
                  Google Entity
                </Text>
              </TouchableOpacity>
            </Surface>
          )}
          {value.cspan_id && !preferences['cspan_hide'] && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `https://www.c-span.org/person/?${value.cspan_id}`,
                  )
                }>
                <Text style={styles.surfaceText} variant="titleMedium">
                  C-SPAN
                </Text>
                <List.Icon
                  color={MD3Colors.primary40}
                  icon="folder"
                  style={styles.surfaceIcon}
                />
              </TouchableOpacity>
            </Surface>
          )}
          {value.votesmart_id && !preferences['vote_smart_hide'] && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `https://justfacts.votesmart.org/candidate/${value.votesmart_id}`,
                  )
                }>
                <Text style={styles.surfaceText} variant="titleMedium">
                  Vote Smart
                </Text>
                <List.Icon
                  color={MD3Colors.primary40}
                  icon="vote"
                  style={styles.surfaceIcon}
                />
              </TouchableOpacity>
            </Surface>
          )}
          {value.govtrack_id && !preferences['gov_track_hide'] && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `https://www.govtrack.us/congress/members/${value.govtrack_id}`,
                  )
                }>
                <List.Icon
                  color={MD3Colors.primary40}
                  icon="trackpad"
                  style={styles.surfaceIcon}
                />
                <Text style={styles.surfaceText} variant="titleMedium">
                  Gov Track
                </Text>
              </TouchableOpacity>
            </Surface>
          )}
          {value.crp_id && !preferences['open_secrets_hide'] && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `https://www.opensecrets.org/members-of-congress/summary?cid=${value.crp_id}&cycle=2022`,
                  )
                }>
                <List.Icon
                  color={MD3Colors.primary40}
                  icon="file-hidden"
                  style={styles.surfaceIcon}
                />
                <Text style={styles.surfaceText} variant="titleMedium">
                  Open Secrets
                </Text>
              </TouchableOpacity>
            </Surface>
          )}
          {value.icpsr_id && !preferences['vote_view_hide'] && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `https://voteview.com/person/${value.icpsr_id}`,
                  )
                }>
                <List.Icon
                  color={MD3Colors.primary40}
                  icon="poll"
                  style={styles.surfaceIcon}
                />
                <Text style={styles.surfaceText} variant="titleMedium">
                  Vote View
                </Text>
              </TouchableOpacity>
            </Surface>
          )}
          {value.fec_candidate_id && !preferences['fec_hide'] && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `https://www.fec.gov/data/candidate/${value.fec_candidate_id}`,
                  )
                }>
                <List.Icon
                  color={MD3Colors.primary40}
                  icon="selection"
                  style={styles.surfaceIcon}
                />
                <Text style={styles.surfaceText} variant="titleMedium">
                  FEC
                </Text>
              </TouchableOpacity>
            </Surface>
          )}

          <Divider horizontalInset={true} style={{height: scale(10)}} />

          {value.contact_form && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() => Linking.openURL(value.contact_form)}>
                <List.Icon
                  color={MD3Colors.primary40}
                  icon="contacts"
                  style={styles.surfaceIcon}
                />
                <Text style={styles.surfaceText} variant="titleMedium">
                  Contact
                </Text>
              </TouchableOpacity>
            </Surface>
          )}
          {value.url && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity onPress={() => Linking.openURL(`${value.url}`)}>
                <List.Icon
                  color={MD3Colors.primary40}
                  icon="web"
                  style={styles.surfaceIcon}
                />
                <Text style={styles.surfaceText} variant="titleMedium">
                  GOV website
                </Text>
              </TouchableOpacity>
            </Surface>
          )}
          {value.api_url && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() => Linking.openURL(`${value.api_url}`)}>
                <List.Icon
                  color={MD3Colors.primary40}
                  icon="people"
                  style={styles.surfaceIcon}
                />
                <Text style={styles.surfaceText} variant="titleMedium">
                  ProPublica
                </Text>
              </TouchableOpacity>
            </Surface>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  surface: {
    flexDirection: 'column-reverse',
    flex: 1,
    padding: scale(4),
    margin: scale(2),
    textAlign: 'center',
    height: scale(50),
    width: scale(340),
    borderColor: 'grey',
    backgroundColor: MD3Colors.secondary95,
  },
  card: {
    borderRadius: scale(4),
    borderWidth: scale(2),
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: MD3Colors.secondary90,
    height: scale(80),
  },
  table: {
    borderRadius: scale(4),
    borderWidth: scale(2),
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: MD3Colors.secondary90,
    height: scale(180),
  },
  detailsContainer: {
    flex: 1,
    FlexDirection: 'row',
    paddingBottom: scale(100),
  },
  surfaceIcon: {
    marginTop: scale(12),
    height: scale(40),
    left: scale(10),
    flexDirection: 'row',
    alignSelf: 'flex-start',
    transform: [{scaleX: scale(1)}, {scaleY: scale(1)}],
  },
  surfaceText: {
    margin: scale(8),
    position: 'absolute',
    left: '20%',
    fontSize: scale(15),
    paddingTop: scale(15),
  },
});

export default DetailsScreen;
