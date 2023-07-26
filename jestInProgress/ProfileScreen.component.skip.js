import { ProfileScreen } from "../src/screens";

jest.useFakeTimers();

import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

import store from '../src/store/store';
describe('ProfileScreen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PaperProvider>
            <ProfileScreen />
          </PaperProvider>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
