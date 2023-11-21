import renderer from 'react-test-renderer';
import RepDetails from '../src/screens/repDetails';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import store from '../src/store/store';

describe('DetailsScreen', () => {
  it('renders correctly', () => {
    const route = {
      key: 'Details-J6x-r3j8YHUcfWHCZfXOQ',
      name: 'Details',
      params: {
        value: {
          first_name: 'Christopher',
          id: 3,
          image_url: 'https://theunitedstates.io/images/congress/original/C001088.jpg',
          last_name: 'Coons',
          party: 'D',
          rep_type: 'senator',
          sponsorManager: [Object],
          sponsors: [Array],
          state: 'DE',
          title: 'Senator, 2nd Class',
        },
      },
      path: undefined,
    };

    const navigation = { navigate: jest.fn() };

    const props = {
      navigation: navigation,
      route: route,
    };

    // Use the spread operator to pass props directly
    const tree = renderer
      .create(
        <Provider store={store}>
          <PaperProvider>
            <RepDetails {...props} />
          </PaperProvider>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
