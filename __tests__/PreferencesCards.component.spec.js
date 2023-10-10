// Import required modules and dependencies
import React from 'react';
import renderer from 'react-test-renderer';
import PreferencesCards from '../src/components/preferencesCards';
import store from '../src/store/store';
import { Provider } from 'react-redux';

// Mock the setPreferences function
jest.mock('../src/store/actions/preferencesAction', () => ({
  setPreferences: jest.fn(),
}));

describe('PreferencesCards', () => {
  test('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <PreferencesCards />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });


  // test('renders with screen props', () => {
  //   const screenProps = {
  //     preferences: {
  //       my_state_only: true,
  //       my_party_only: false,
  //       twitter_hide: true,
  //       facebook_hide: false,
  //       youtube_hide: true,
  //       google_entity_hide: false,
  //       cspan_hide: true,
  //       gov_track_hide: false,
  //       open_secrets_hide: true,
  //       vote_view_hide: false, // Uncomment when fixed
  //       vote_smart_hide: true, // Uncomment when fixed
  //       fec_hide: false, // Uncomment when fixed
  //     },
  //   };
  //   const tree = renderer.create(
  //     <Provider store={store}>
  //       <PreferencesCards {...screenProps} />
  //     </Provider>
  //   ).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  // Add more specific tests as needed for Switch components
  // and their interactions with the setPreferences function
});
