// import { _getCongress } from '../src/store/actions/congressAction';
import { GET_CONGRESS, CONGRESS_ERROR } from '../src/store/types';
import { Congress } from "../src/models/Congress";
import { _getCongress } from "../src/store/actions/congressAction";

type Action = {
  type: string;
  payload: [Congress]
}

const congressTestData = require('../__tests__/congressTestData.json');

describe('_getCongress', () => {
  it('should dispatch a GET_CONGRESS action with the correct payload', async () => {
    const uid = '1234567890';
    const expectedAction: Action = {
      type: GET_CONGRESS,
      payload: congressTestData,
    };

    const dispatch = jest.fn();

    // Use await to correctly handle the async behavior
    await _getCongress(uid)(dispatch);

    expect(dispatch).toBeCalledWith(expectedAction);
  });

  it('should dispatch a CONGRESS_ERROR action if there is an error', async () => {
    const error = new Error('Something went wrong');

    // Modify the implementation of _getCongress to reject the promise for error simulation
    const _getCongressWithError = async () => {
      throw error;
    };

    const dispatch = jest.fn();

    // Use await to correctly handle the async behavior
    await _getCongressWithError;

    expect(dispatch).toBeCalledWith({
      type: CONGRESS_ERROR,
      payload: error,
    });
  });
});
