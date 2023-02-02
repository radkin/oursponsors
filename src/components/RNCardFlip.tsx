import {StyleSheet, View} from 'react-native';
import * as React from 'react';
import {Avatar, Button, Card, Text} from 'react-native-paper';
import {Grid} from 'react-native-paper-grid';

import {SEN1, SEN2, SEN3, SEN4, SEN5, SEN6, SEN7} from '../images';

const senatorImages = [SEN1, SEN2, SEN3, SEN4, SEN5, SEN6, SEN7];

function renderSenators() {
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

  if (senatorImages.length > 0) {
    return senatorImages.map((image, index) => (
      <Grid container key={index}>
        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={LeftContent}
          />
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Cover source={image} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </Grid>
    ));
  }
}

function RNCardFlip(): JSX.Element {
  return <View style={styles.container}>{renderSenators()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
});

export default RNCardFlip;
