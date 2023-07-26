import { _getCongress } from '../src/store/actions/congressAction';
import { GET_CONGRESS, CONGRESS_ERROR } from '../src/store/types';
import { Congress } from "../src/models/Congress";

type Action = {
  type: string;
  payload: [Congress]
}

const congressTestData = require('./congressTestData.json');

describe('_getCongress', () => {
  it('should dispatch a GET_CONGRESS action with the correct payload', async () => {
    const uid = '1234567890';
    const expectedAction: Action = {
      type: GET_CONGRESS,
      payload: congressTestData,
    };

    const dispatch = jest.fn();

    await dispatch(_getCongress(uid));

    expect(dispatch).toBeCalledWith(expectedAction);
  });

  it('should dispatch a CONGRESS_ERROR action if there is an error', async () => {
    const uid = '1234567890';
    const error = new Error('Something went wrong');

    const dispatch = jest.fn();

    await dispatch(_getCongress(uid));

    expect(dispatch).toBeCalledWith({
      type: CONGRESS_ERROR,
      payload: error,
    });
  });
});
