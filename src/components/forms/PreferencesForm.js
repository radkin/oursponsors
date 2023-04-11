import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// or any pure javascript modules available in npm
import {Title, Card, Button, TextInput, Switch} from 'react-native-paper';

// Import Redux and React Redux Dependencies
import {useSelector, connect} from 'react-redux';
import {
  updatePreferences,
  getPreferences,
} from '../../store/actions/preferencesAction';

function PreferencesForm({updatePreferences}) {
  const preferencesListData = useSelector(state => state.preferencesList);
  const {preferences} = preferencesListData;

  // console.log(preferences);

  return (
    <View style={styles.container}>
      <Card title="Card Title">
        <Text style={styles.paragraph}>
          ToDo App with React Native and Redux
        </Text>
      </Card>

      <Card>
        <Card.Title
          title="My State Only:"
          left={props => <Icon name="tasks" size={24} color="black" />}
        />
        <Card.Content style={{position: 'absolute', bottom: 0, right: 0}}>
          <Switch
            value={preferences.my_state_only}
            onChange={value => updatePreferences(value)}
          />
        </Card.Content>
      </Card>
    </View>
  );
}

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

const mapStateToProps = state => ({
  preferences: state.preferences,
});

const mapDispatchToProps = {
  updatePreferences,
};

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesForm);
