import {Avatar, Card, Provider, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import * as React from 'react';
import { scale } from "react-native-size-matters";

function RenderRepCard({value}) {
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

  return (
    <Provider>
      <Card style={styles.card}>
        <Card.Title
          style={styles.textContainer}
          title={`${value.first_name} ${value.last_name}`}
          titleStyle={styles.titleText}
          left={LeftContent}
        />
        <Card.Content style={styles.textContainer}>
          <Text
            variant="titleMedium"
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
    height: scale(140),
    width: scale(210),
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
    marginTop: scale(5),
    height: scale(30),
    left: scale(2),
    flexDirection: 'row',
  },
  contentText: {
    fontSize: scale(13),
    lineHeight: scale(13) * 0.75,
    paddingTop: scale(13) - (scale(13) * 0.75),
  },
  titleText: {
    fontSize: scale(15),
    fontWeight: 'bold',
    lineHeight: scale(15) * 0.75,
    paddingTop: scale(15) - (scale(15) * 0.75),
    position: 'relative',
  },
  cardProfPic: {
    position: 'absolute',
    left: '100%',
    height: scale(140),
    width: scale(130),
  },
});
export default RenderRepCard;
