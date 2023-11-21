import {Card, Provider, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import * as React from 'react';
import {scale} from 'react-native-size-matters';
import {FC} from 'react';
import { MiniSenator } from "../models/MiniSenator";
import { MiniCongress } from "../models/MiniCongress";

// interface Mini {
//   mini: MiniSenator | MiniCongress;
// }

interface MiniRep {
  miniRep?: MiniSenator | MiniCongress;
}

const SmallRepCard: FC<MiniRep> = ({miniRep}) => {
  return (
    <Provider>
      <Card style={styles.card}>
        <Card.Title
          style={styles.textContainer}
          title={`${miniRep?.first_name} ${miniRep?.last_name}`}
          titleStyle={styles.titleText}
        />
        <Card.Content style={styles.textContainer}>
          <Text
            style={
              styles.contentText
            }>{`${miniRep?.state} ${miniRep?.party} ${miniRep?.title}`}</Text>
        </Card.Content>
        <Card.Cover
          style={styles.cardProfPic}
          source={{uri: miniRep?.image_url}}
        />
      </Card>
    </Provider>
  );
};

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
    paddingHorizontal: scale(150),
    flexDirection: 'row',
    width: scale(500),
  },
  contentText: {
    fontSize: scale(14),
  },
  titleText: {
    paddingHorizontal: scale(138),
    fontSize: scale(17),
    fontWeight: 'bold',
    paddingTop: scale(10),
    position: 'relative',
    bottom: '17%',
  },
  cardProfPic: {
    position: 'absolute',
    right: '81%',
    height: scale(69),
    width: scale(64),
  },
});
export default SmallRepCard;
