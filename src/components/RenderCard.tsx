import { Avatar, Button, Card, Dialog, Portal, Provider, Text } from "react-native-paper";
import { TouchableOpacity, View } from "react-native";
import Image from "react-native-scalable-image";
import * as React from "react";
import {responsiveScreenHeight, responsiveScreenWidth} from 'react-native-responsive-dimensions';

function RenderCard({value}) {
  // console.log(appState.repos);

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  // ToDo: add some really cool onLongPress functionality!

  return (
    <Provider>
      <Card type="outlined">
        <Card.Title
          title={`${value.first_name} ${value.last_name}`}
          subtitle={`${value.state} ${value.party} ${value.title}`}
          left={LeftContent}
        />
        <TouchableOpacity onPress={showDialog} >
          <Image
            source={{uri: value.image_url}}
            resizeMode={'cover'}
            width={responsiveScreenWidth(100)}
            height={responsiveScreenHeight(100)}
          />
        </TouchableOpacity>
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

export default RenderCard;
