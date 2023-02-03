import * as React from 'react';
import {INAJAR_TOKEN} from '@env';
import {StyleSheet, View} from 'react-native';
import {Avatar, Card, Button, Text} from 'react-native-paper';
import {SEN1, SEN2, SEN3, SEN4, SEN5, SEN6, SEN7} from '../images';
import {FlatList} from 'react-native';

const senatorImages = [
  {key: 1, value: SEN1},
  {key: 2, value: SEN2},
  {key: 3, value: SEN3},
  {key: 4, value: SEN4},
  {key: 5, value: SEN5},
  {key: 6, value: SEN6},
  {key: 7, value: SEN7}
];

function renderSenators() {
  console.log(INAJAR_TOKEN);
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
  type ItemProps = {value: object};
  const RenderCard = ({value}: ItemProps) => {
    return (
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
        <Card.Cover source={value} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
      )};

  if (senatorImages.length > 0) {
    return (
      <FlatList
        data={senatorImages}
        renderItem={({item}) => <RenderCard value={item.value} />}
        keyExtractor={item => item.key}
        horizontal={true}
      />
    );
  }
}

function CardsFlatlist(): JSX.Element {
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

export default CardsFlatlist;
