import * as React from 'react';
import { FC } from "react";
import { scale } from "react-native-size-matters";
import { Linking, ScrollView, TextStyle, TouchableOpacity, View } from "react-native";
import { Divider, List, MD3Colors, Surface, Text } from "react-native-paper";
import { CongressDetails } from "../models/CongressDetails";
import {detailStyles as styles} from './detailStyles';

interface PreferenceDetails {
  preferenceDetails: CongressDetails;
}

const CongressDetailLinks: FC<PreferenceDetails> = ({preferenceDetails}) => {

  const preferences = preferenceDetails.preferences;
  const repDetails = preferenceDetails.congress;

  if (repDetails && preferences) {
    return (
      <ScrollView style={{ paddingTop: scale(5) }}>
        <View>
          {repDetails['twitter_account'] && !preferences['twitter_hide'] && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `https://twitter.com/${repDetails['twitter_account']}`,
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
          {repDetails['facebook_account'] && !preferences['facebook_hide'] && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `https://facebook.com/${repDetails['facebook_account']}`,
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
          {repDetails['youtube_account'] && !preferences['youtube_hide'] && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `https://youtube.com/${repDetails['youtube_account']}`,
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
          {repDetails['google_entity_id'] && !preferences['google_entity_hide'] && (
              <Surface style={styles.surface} elevation={4}>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      `https://www.google.com/search?kgmid=${repDetails['google_entity_id']}`,
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
          {repDetails['cspan_id'] && !preferences['cspan_hide'] && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `https://www.c-span.org/person/?${repDetails['cspan_id']}`,
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
          {repDetails['votesmart_id'] && !preferences['vote_smart_hide'] && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `https://justfacts.votesmart.org/candidate/${repDetails['votesmart_id']}`,
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
          {repDetails['govtrack_id'] && !preferences['gov_track_hide'] && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `https://www.govtrack.us/congress/members/${repDetails['govtrack_id']}`,
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
          {repDetails['crp_id'] && !preferences['open_secrets_hide'] && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `https://www.opensecrets.org/members-of-congress/summary?cid=${repDetails['crp_id']}&cycle=2022`,
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
          {repDetails['icpsr_id'] && !preferences['vote_view_hide'] && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `https://voteview.com/person/${repDetails['icpsr_id']}`,
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
          {repDetails['fec_candidate_id'] && !preferences['fec_hide'] && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `https://www.fec.gov/data/candidate/${repDetails['fec_candidate_id']}`,
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

          <Divider horizontalInset={true} style={{ height: scale(10) }} />

          {repDetails['contact_form'] && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() => Linking.openURL(repDetails['contact_form'])}>
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
          {repDetails['url'] && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity onPress={() => Linking.openURL(`${repDetails['url']}`)}>
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
          {repDetails['api_url'] && (
            <Surface style={styles.surface} elevation={4}>
              <TouchableOpacity
                onPress={() => Linking.openURL(`${repDetails['api_url']}`)}>
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
    )
  } else {
    return (
      <Text>No Preferences, so no links!</Text>
    )
  }
}

export default CongressDetailLinks;
