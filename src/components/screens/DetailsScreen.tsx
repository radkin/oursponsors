import {
  View,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React from 'react';
import {List, MD3Colors, Surface, Text} from 'react-native-paper';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';
import RenderCard from '../RenderCard';
import ScrollView = Animated.ScrollView;

function DetailsScreen({route}) {
  const {value} = route.params;
  return (
    <View style={{paddingBottom: 190}}>
      <View style={styles.card}>
        <RenderCard value={value} />
      </View>

      <ScrollView style={{paddingTop: 7}}>
        <View>
          {value.twitter_account && (
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
          {value.facebook_account && (
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
          {value.youtube_account && (
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
          {value.google_entity_id && (
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
          {value.cspan_id && (
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
          {value.votesmart_id && (
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
          {value.govtrack_id && (
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
          {value.crp_id && (
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
          {value.icpsr_id && (
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
          {value.fec_candidate_id && (
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
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  surface: {
    flexDirection: 'column-reverse',
    flex: 1,
    padding: 10,
    margin: 2,
    textAlign: 'auto',
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
  },
  surfaceText: {
    position: 'absolute',
    left: '20%',
  },
});

export default DetailsScreen;
