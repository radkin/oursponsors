jest.useFakeTimers();

import renderer from 'react-test-renderer';
import DetailsScreen from '../src/components/screens/DetailsScreen';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

import store from '../src/store/store';
describe('DetailsScreen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PaperProvider>
            <DetailsScreen />
          </PaperProvider>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
