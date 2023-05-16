import {Avatar, Card, Provider, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import * as React from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

function RenderSmallRepCard({value}) {
  return (
    <Provider>
      <Card style={styles.cardSmallStyle}>
        <Card.Title
          style={styles.textContainer}
          title={
            `${value.first_name} ${value.last_name} ${value.state} ${value.party}`
          }
          titleStyle={{
            fontSize: responsiveScreenFontSize(2),
            paddingTop: responsiveScreenHeight(1),
            position: 'relative',
            bottom: '17%',
          }}
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
  cardSmallStyle: {
    height: responsiveScreenHeight(11),
    width: responsiveScreenWidth(100),
    marginHorizontal: 7,
    marginVertical: responsiveScreenHeight(1),
    position: 'absolute',
  },
  cardContainer: {
    margin: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#3d80fc',
  },
  textContainer: {
    marginTop: 25,
    height: responsiveScreenHeight(1),
    left: 2,
    flexDirection: 'row',
  },
  contentText: {
    fontSize: responsiveScreenFontSize(0.5),
  },
  cardProfPic: {
    position: 'absolute',
    left: '75%',
    height: responsiveScreenHeight(10),
    width: responsiveScreenWidth(22),
  },
});
export default RenderSmallRepCard;
