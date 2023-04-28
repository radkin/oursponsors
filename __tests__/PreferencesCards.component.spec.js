jest.useFakeTimers();

import PreferencesCards from '../src/components/PreferencesCards';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

import store from '../src/store/store';

describe('PreferencesCards', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PaperProvider>
            <PreferencesCards />
          </PaperProvider>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
