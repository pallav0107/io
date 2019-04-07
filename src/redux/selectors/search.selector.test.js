import { getSearchCriteria } from './search.selector';
import "../../setupTests"

describe('search.selector', () => {
  let state;
  it('should return empty object if there is no search value', () => {
    state = undefined;
    expect(getSearchCriteria(state)).toEqual({});
  });

  it('should return the form search value', () => {
    const form = {
      customerSearch: {
        values: {
          customerId: 'test',
        },
      },
    };
    state = { form };
    expect(getSearchCriteria(state)).toEqual('test');
  });
});
