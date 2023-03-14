import {View, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  List,
  MD3Colors,
  Surface,
  Text,
} from 'react-native-paper';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';
import RenderCard from '../RenderCard';

function DetailsScreen({route}) {
  const {value} = route.params;
  console.log(value);
  return (
    <View>
      <View style={styles.card}>
        <RenderCard value={value} />
      </View>

      <View style={styles.spaceEvenlyContainer}>
        {value.twitter_account && (
          <Surface style={styles.surface} elevation={4}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(`https://twitter.com/${value.twitter_account}`)
              }>
              <List.Icon color={MD3Colors.tertiary70} icon="twitter" />
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
              <List.Icon color={MD3Colors.tertiary70} icon="facebook" />
            </TouchableOpacity>
          </Surface>
        )}
        {value.youtube_account && (
          <Surface style={styles.surface} elevation={4}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(`https://youtube.com/${value.youtube_account}`)
              }>
              <List.Icon color={MD3Colors.tertiary70} icon="youtube" />
            </TouchableOpacity>
          </Surface>
        )}
        {value.contact_form && (
          <Surface style={styles.surface} elevation={4}>
            <TouchableOpacity
              onPress={() => Linking.openURL(value.contact_form)}>
              <Text>Contact</Text>
              <List.Icon color={MD3Colors.tertiary70} icon="contacts" />
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
              <List.Icon color={MD3Colors.tertiary70} icon="google" />
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
              <Text>C-SPAN</Text>
              <List.Icon color={MD3Colors.tertiary70} icon="folder" />
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
              <Text>Vote Smart</Text>
              <List.Icon color={MD3Colors.tertiary70} icon="vote" />
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
              <Text>Gov Track</Text>
              <List.Icon color={MD3Colors.tertiary70} icon="trackpad" />
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
              <Text>Open Secrets</Text>
              <List.Icon color={MD3Colors.tertiary70} icon="file-hidden" />
            </TouchableOpacity>
          </Surface>
        )}
        {value.api_url && (
          <Surface style={styles.surface} elevation={4}>
            <TouchableOpacity
              onPress={() => Linking.openURL(`${value.api_url}`)}>
              <Text>ProPublica</Text>
              <List.Icon color={MD3Colors.tertiary70} icon="people" />
            </TouchableOpacity>
          </Surface>
        )}
        {value.icpsr_id && (
          <Surface style={styles.surface} elevation={4}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(`https://voteview.com/person/${value.icpsr_id}`)
              }>
              <Text>Vote View</Text>
              <List.Icon color={MD3Colors.tertiary70} icon="poll" />
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
              <Text>FEC</Text>
              <List.Icon color={MD3Colors.tertiary70} icon="selection" />
            </TouchableOpacity>
          </Surface>
        )}
        {value.url && (
          <Surface style={styles.surface} elevation={4}>
            <TouchableOpacity onPress={() => Linking.openURL(`${value.url}`)}>
              <Text>GOV website</Text>
              <List.Icon color={MD3Colors.tertiary70} icon="web" />
            </TouchableOpacity>
          </Surface>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceEvenlyContainer: {
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingLeft: 40,
    paddingRight: 40,
    padding: 40,
    paddingStart: 40,
    paddingEnd: 40,
  },
  card: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: responsiveScreenHeight(20),
  },
  detailsContainer: {
    flex: 1,
    FlexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default DetailsScreen;
