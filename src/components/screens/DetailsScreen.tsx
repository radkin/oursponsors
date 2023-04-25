import {
  View,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useEffect} from 'react';
import {Divider, List, MD3Colors, Surface, Text} from 'react-native-paper';
import { responsiveScreenFontSize, responsiveScreenHeight } from "react-native-responsive-dimensions";
import RenderRepCard from '../RenderRepCard';
import ScrollView = Animated.ScrollView;
import {useDispatch, useSelector} from 'react-redux';
import {getPreferences} from '../../store/actions/preferencesAction';

function DetailsScreen({route}) {
  const dispatch = useDispatch();
  const preferencesListData = useSelector(state => state.preferencesList);
  const {preferences} = preferencesListData;

  useEffect(() => {
    dispatch(getPreferences());
  }, [dispatch]);

  const {value} = route.params;
  return (
    <View style={{paddingBottom: 190}}>
      <View style={styles.card}>
        <RenderRepCard value={value} />
      </View>

      <ScrollView style={{paddingTop: 7}}>
        <View>
          {value.twitter_account && !preferences.twitter_hide && (
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
          {value.facebook_account && !preferences.facebook_hide && (
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
          {value.youtube_account && !preferences.youtube_hide && (
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
                <Text style={styles.surfaceText} variant="titleMedium">
                  YouTube
                </Text>
              </TouchableOpacity>
            </Surface>
          )}
          {value.google_entity_id && !preferences.google_entity_hide && (
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
                <Text style={styles.surfaceText} variant="titleMedium">
                  Google Entity
                </Text>
              </TouchableOpacity>
            </Surface>
          )}
          {value.cspan_id && !preferences.cspan_hide && (
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
          {value.votesmart_id && !preferences.vote_smart_hide && (
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
          {value.govtrack_id && !preferences.gov_track_hide && (
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
          {value.crp_id && !preferences.open_secrets_hide && (
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
          {value.icpsr_id && !preferences.vote_view_hide && (
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
          {value.fec_candidate_id && !preferences.fec_hide && (
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

          <Divider horizontalInset={true} style={{height: 10}} />

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
    padding: responsiveScreenHeight(1),
    margin: responsiveScreenHeight(.4),
    textAlign: 'center',
    height: responsiveScreenHeight(7),
    borderColor: 'grey',
    backgroundColor: MD3Colors.secondary95,
  },
  card: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: MD3Colors.secondary90,
    height: responsiveScreenHeight(20),
  },
  detailsContainer: {
    flex: 1,
    FlexDirection: 'row',
    paddingBottom: 100,
  },
  surfaceIcon: {
    marginTop: 15,
    height: responsiveScreenHeight(5),
    left: 2,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    transform: [{ scaleX:  responsiveScreenFontSize(.08)}, { scaleY: responsiveScreenFontSize(.08) }]

  },
  surfaceText: {
    margin: 10,
    position: 'absolute',
    left: '20%',
    fontSize: responsiveScreenFontSize(2),
    paddingTop: responsiveScreenFontSize(2)
  },
});

export default DetailsScreen;
