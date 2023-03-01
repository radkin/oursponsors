import { Avatar, Button, Card, Dialog, Portal, Provider, Text } from "react-native-paper";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Image from "react-native-scalable-image";
import * as React from "react";
import { responsiveScreenHeight, responsiveScreenWidth, useResponsiveHeight } from "react-native-responsive-dimensions";

function RenderCard({value}) {
  // console.log(appState.repos);

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  // ToDo: add some really cool onLongPress functionality!

  return (
    <Provider>
      <Card style={styles.cardSmallStyle}>
          <Card.Title
            style={styles.textContainer}
            title={`${value.first_name} ${value.last_name}`}
            left={LeftContent}
          />
        <Card.Content style={styles.textContainer}>
          <Text variant="titlelarge">{`${value.state} ${value.party} ${value.title}`}</Text>
        </Card.Content>
        <View onPress={showDialog} style={styles.cardProfPic}>
          <Image
            source={{uri: value.image_url}}
            resizeMode={'cover'}
            width={responsiveScreenWidth(40)}
            height={responsiveScreenHeight(100)}
          />
        </View>
      </Card>
      <View>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Icon icon={"dots-horizontal-circle-outline"}></Dialog.Icon>
            <Dialog.Title>Details</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">Votes with party: {value.votes_with_party_pct}%</Text>
              <Text>{value.leadership_role}</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
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
    borderColor: '#3d80fc'
  },
  textContainer: {
    marginTop: 15,
    height: responsiveScreenHeight(5),
    left: 2,
    flexDirection: 'row'
  },
  cardProfPic: {
    position: 'absolute',
    left: '100%'
  },
})
export default RenderCard;
