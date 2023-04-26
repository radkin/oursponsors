import {AxiosPromise} from 'axios';
import {getSenators} from 'store/actions/senatorAction';

jest.mock('../features/instancec/axios-instance');

describe('api', () => {
  describe('axiosInstanceCounter()', () => {
    it('should call api with correct parameters', async () => {
      // mock to resolve a Promise<void>
      jest
        .mocked(getSenators())
        .mockResolvedValueOnce(
          await Promise.resolve() as AxiosPromise<void>,
        );

      expect(getSenators()).toHaveBeenCalledWith({method: 'get'});
    });
  });
});
