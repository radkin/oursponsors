jest.useFakeTimers();

import renderer from 'react-test-renderer';
import RepDetails from '../src/screens/repDetails';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

import store from '../src/store/store';
describe('DetailsScreen', () => {
  it('renders correctly', () => {

    const route = {
      key: 'Details-jLO2Y2EFGMPQTG_IyPCzQ',
      name: 'Details',
      params: {
        value: {
          api_uri:
            'https://api.propublica.org/congress/v1/members/B000825.json',
          at_large: false,
          contact_form: null,
          crp_id: 'N00045974',
          cspan_id: null,
          date_of_birth: '1986-12-15',
          district: '3',
          dw_nominate: null,
          facebook_account: null,
          fec_candidate_id: 'H0CO03165',
          first_name: 'Lauren',
          gender: 'F',
          geoid: '0803',
          google_entity_id: '/g/11j2v06x6p',
          govtrack_id: 456805,
          icpsr_id: null,
          id: 399,
          image_url:
            'https://theunitedstates.io/images/congress/original/B000825.jpg',
          in_office: false,
          last_name: 'Boebert',
          last_updated: '2022-12-31T00:00:00',
          leadership_role: null,
          middle_name: null,
          missed_votes: 24,
          missed_votes_pct: 2.41,
          next_election: '2022',
          ocd_id: 'ocd-division/country:us/state:co/cd:3',
          office: '1609 Longworth House Office Building',
          party: 'R',
          phone: '202-225-4761',
          pro_publica_id: 'B000825',
          rss_url: null,
          seniority: 2,
          short_title: 'Rep.',
          state: 'CO',
          suffix: null,
          title: 'Representative',
          total_present: 1,
          total_votes: 997,
          twitter_account: 'RepBoebert',
          url: 'https://boebert.house.gov',
          votes_against_party_pct: 25.21,
          votes_with_party_pct: 74.69,
          votesmart_id: null,
          youtube_account: null,
        },
      },
      path: undefined,
    };

    const navigation = {navigate: jest.fn()};

    const props = {
      navigation: navigation,
      route: route,
    };

    // ToDo:     TypeError: Cannot read properties of undefined (reading 'params')
    // 45 |   const value = props.route.params?.value;
    // Pretty sure this is a problem with the test!

    const tree = renderer
      .create(
        <Provider store={store}>
          <PaperProvider>
            <RepDetails props={props} />
          </PaperProvider>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
