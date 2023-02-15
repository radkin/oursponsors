import { Avatar, Button, Card, Dialog, Portal, Provider, Text } from "react-native-paper";
import { Dimensions, TouchableOpacity, View } from "react-native";
import Image from "react-native-scalable-image";
import * as React from "react";

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
            width={Dimensions.get('window').width}
          />
        </TouchableOpacity>
      </Card>
      <View>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">This is simple dialog</Text>
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
