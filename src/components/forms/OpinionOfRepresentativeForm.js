import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// or any pure javascript modules available in npm
import {Title, Card, Button, TextInput} from 'react-native-paper';

// Import Redux and React Redux Dependencies
import {connect, useDispatch, useSelector} from 'react-redux';
import {
  updatePreferences,
  getPreferences,
} from '../../store/actions/preferencesAction';
import {useEffect} from 'react';

// Test Data
// const data = [
//   {id: 1, task: "Do this stuff"},
//   {id: 2, task: "Do another stuff"},
// ]

const OpinionOfRepForm = ({updatePreferences}) => {
  const dispatch = useDispatch();
  const preferencesListData = useSelector(state => state.preferencesList);
  const {preferences} = preferencesListData;

  useEffect(() => {
    dispatch(getPreferences());
  }, [dispatch]);

  const [task, setTask] = React.useState('');

  const handleUpdatePreferences = () => {
    updatePreferences(task);
    setTask('');
  };

  return (
    <View style={styles.container}>
      <Card title="Card Title">
        <Text style={styles.paragraph}>
          ToDo App with React Native and Redux
        </Text>
      </Card>
      <Card>
        <Card.Content>
          <Title>Select Preference to change</Title>

          <TextInput
            mode="outlined"
            label="Preference"
            value={task}
            onChangeText={task => setTask(task)}
          />
          <Button mode="contained" onPress={handleUpdatePreferences}>
            Update Preference
          </Button>
        </Card.Content>
      </Card>

      <Card>
        <Card.Title
          title={`${preferences.id} | My State Only: ${preferences.my_state_only}`}
          left={props => <Icon name="tasks" size={24} color="black" />}
        />
        <Card.Content>
          <Text>My State Only: {`${preferences.my_state_only}`}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    preferences: state.preferences,
  };
};

const mapDispatchToProps = {updatePreferences};

export default connect(mapStateToProps, mapDispatchToProps)(OpinionOfRepForm);
