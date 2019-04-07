import { getCustomerInfo } from './customerProfile.selector';
import "../../setupTests"

describe('customerProfile.selector', () => {
  let state;
  it('should throw an error if state are undefined', () => {
    state = undefined;
    expect(() => getCustomerInfo(state)).toThrow();
  });

  it('should return null if customer state is empty', () => {
    const customer = {
      byId: {},
      allIds: [],
    };
    state = { entities: { customer } };
    expect(getCustomerInfo(state)).toBeNull();
  });

  it('should return isFetching', () => {
    const customer = {
      byId: { test: 'test' },
      allIds: [],
      isFetching: true,
    };
    state = { entities: { customer } };
    expect(getCustomerInfo(state)).toBeTruthy();
  });

  it('should return customer from search field', () => {
    const customer = {
      byId: {
        '1': {
          name: 'Jeremy',
        },
      },
      allIds: [],
      isFetching: false,
    };
    const form = {
      customerSearch: {
        values: {
          customerId: '1',
        },
      },
    };
    const expected = {
      name: 'Jeremy',
      isFetching: false,
    };
    state = { entities: { customer }, form };
    expect(getCustomerInfo(state)).toEqual(expected);
  });
});
