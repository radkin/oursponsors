import React from 'react';
import {Text, TextInput, View, Button, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { sendLoginAction, sendLogoutAction,
//   // loginSuccess,
// } from '../LoginAction';
import { getPreferences, updatePreferences } from "../../store/actions/preferencesAction";

class PreferencesScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props, context) {
    super(props, context);
    this.state = this.props.preferences;

    console.log('const prop:' + JSON.stringify(this.props));
    console.log('const state:' + JSON.stringify(this.state));
  }
  componentDidMount() {
    // console.log("componentDidMount store.getState:" + JSON.stringify(store.getState()));
    // console.log("componentDidMount state:" + JSON.stringify(this.state));
  }

  onPressPreferencesUpdate = () => {
    console.log(
      'onPressPreferencesUpdate... state:' + JSON.stringify(this.state),
    );
    const preferences = {
      myStateOnly: this.state.myStateOnly,
      myPartyOnly: this.state.myPartyOnly,
    };

    this.props.updatePreferences(preferences, this.successCb, this.failCb);
  };

  successCb = loginUser => {
    console.log('successCb... loginUser:' + JSON.stringify(loginUser));
  };

  failCb = error => {
    console.log('failCb... error:' + JSON.stringify(error)); //"code":"auth/wrong-password"
    alert('Your login failed. Please try again.' + error);
  };

  onChangeMyStateOnly = myStateOnly => this.setState({myStateOnly});
  onChangeMyPartyOnly = myPartyOnly => this.setState({myPartyOnly});

  render() {
    return (
      <View>
        <Text style={styles.title}>My State Only:</Text>
        <TextInput
          style={styles.stateOnlyInput}
          onChangeText={this.onChangeMyStateOnly}
          value={this.state.myStateOnly}
        />
        <Text style={styles.title}>My Party Only:</Text>
        <TextInput
          style={styles.stateOnlyInput}
          onChangeText={this.onChangeMyPartyOnly}
          value={this.state.myPartyOnly}
        />
        <Button
          title="Update Preferences"
          style={styles.buttonText}
          onPress={this.onPressPreferencesUpdate}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 14,
    marginLeft: 14,
    fontSize: 16,
  },
  stateOnlyInput: {
    height: 32,
    margin: 16,
    paddingHorizontal: 14,
    borderColor: '#111111',
    borderWidth: 1,
    fontSize: 18,
  },
  buttonText: {
    marginLeft: 16,
    fontSize: 18,
  },
});

const mapStateToProps = state => {
  const {preferences} = state;
  console.log('login mapStateToProps ... state:' + JSON.stringify(state));
  console.log(
    'login mapStateToProps ... props:' + JSON.stringify({preferences}),
  );
  return {preferences};
};

// need custom middleware for async func --added thunk in createStore
const mapDispatchToProps = {
  updatePreferences: updatePreferences,
  preferences: getPreferences,
};

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesScreen);
