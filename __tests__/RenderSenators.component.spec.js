jest.useFakeTimers();

import renderer from 'react-test-renderer';
import RenderSenators from '../src/components/renderSenators';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

import store from '../src/store/store';
describe('RenderSenators', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PaperProvider>
            <RenderSenators />
          </PaperProvider>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
