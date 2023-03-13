import {Avatar, Card, Provider, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import Image from 'react-native-scalable-image';
import * as React from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

function RenderCard({value}) {
  // console.log(appState.repos);

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

  return (
    <Provider>
      <Card style={styles.cardSmallStyle}>
        <Card.Title
          style={styles.textContainer}
          title={`${value.first_name} ${value.last_name}`}
          left={LeftContent}
        />
        <Card.Content style={styles.textContainer}>
          <Text variant="titleMedium">{`${value.state} ${value.party} ${value.title}`}</Text>
        </Card.Content>
        <View style={styles.cardProfPic}>
          <Image
            source={{uri: value.image_url}}
            resizeMode={'cover'}
            width={responsiveScreenWidth(40)}
            height={responsiveScreenHeight(100)}
          />
        </View>
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
    height: responsiveScreenHeight(100),
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
  cardProfPic: {
    position: 'absolute',
    left: '100%',
  },
});
export default RenderCard;
