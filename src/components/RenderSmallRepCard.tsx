import {Avatar, Card, Provider, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import * as React from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import { scale } from "react-native-size-matters";

function RenderSmallRepCard({value}) {
  return (
    <Provider>
      <Card style={styles.card}>
        <Card.Title
          style={styles.textContainer}
          title={
            `${value.first_name} ${value.last_name} ${value.state} ${value.party}`
          }
          titleStyle={styles.titleText}
        />
        <Card.Content style={styles.textContainer}>
          <Text
            style={
              styles.contentText
            }>{`${value.state} ${value.party} ${value.title}`}</Text>
        </Card.Content>
        <Card.Cover
          style={styles.cardProfPic}
          source={{uri: value.image_url}}
        />
      </Card>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screenRow: {
    flex: 1,
    alignItems: 'stretch',
  },
  card: {
    height: scale(70),
    width: scale(342),
    marginHorizontal: scale(5),
    marginVertical: scale(5),
    position: 'absolute',
  },
  cardContainer: {
    margin: scale(15),
    borderRadius: scale(15),
    borderWidth: scale(1),
    borderColor: '#3d80fc',
  },
  textContainer: {
    marginTop: scale(3),
    height: scale(20),
    left: 2,
    flexDirection: 'row',
  },
  contentText: {
    fontSize: scale(14),
  },
  titleText: {
    fontSize: scale(17),
    fontWeight: 'bold',
    paddingTop: scale(10),
    position: 'relative',
    bottom: '17%',
  },
  cardProfPic: {
    position: 'absolute',
    left: '81%',
    height: scale(69),
    width: scale(64),
  },
});
export default RenderSmallRepCard;
