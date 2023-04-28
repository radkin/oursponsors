jest.useFakeTimers();

import renderer from 'react-test-renderer';
import RenderCongress from '../src/components/RenderCongress';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

import store from '../src/store/store';
describe('RenderCongress', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PaperProvider>
            <RenderCongress />
          </PaperProvider>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
