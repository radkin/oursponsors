import {Avatar, Card, Provider, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import * as React from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from 'react-native-responsive-dimensions';

function RenderRepCard({value}) {
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

  return (
    <Provider>
      <Card style={styles.cardSmallStyle}>
        <Card.Title
          style={styles.textContainer}
          title={`${value.first_name} ${value.last_name}`}
          titleStyle={{fontSize: responsiveScreenFontSize(2.5), fontWeight: 'bold'}}
          left={LeftContent}
        />
        <Card.Content style={styles.textContainer}>
          <Text variant="titleMedium" style={styles.contentText}>{`${value.state} ${value.party} ${value.title}`}</Text>
        </Card.Content>
        <Card.Cover
          style={styles.cardProfPic}
          source={{uri: value.image_url}}
        />
      </Card>
    </Provider>
  );
}

const contentFont = responsiveScreenFontSize(2);

const styles = StyleSheet.create({
  screenRow: {
    flex: 1,
    alignItems: 'stretch',
  },
  cardSmallStyle: {
    height: responsiveScreenHeight(22.5),
    width: responsiveScreenWidth(60),
    marginHorizontal: 7,
    marginVertical: 7,
  },
  cardContainer: {
    margin: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#3d80fc',
  },
  textContainer: {
    marginTop: 15,
    height: responsiveScreenHeight(5),
    left: 2,
    flexDirection: 'row',
  },
  contentText: {
    paddingTop: responsiveScreenFontSize(1),
    fontSize: responsiveScreenFontSize(2),
  },
  cardProfPic: {
    position: 'absolute',
    left: '100%',
    height: responsiveScreenHeight(20),
    width: responsiveScreenWidth(40),
  },
});
export default RenderRepCard;
