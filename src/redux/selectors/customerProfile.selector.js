import { createSelector } from 'reselect';
import { get, isEmpty } from 'lodash';

import {
  getCustomerById,
  isCustomerFetching,
} from '@wdpui/redux-exp-staff-core-v1/selectors';

import { getSearchCriteria } from './search.selector';

export const getCustomerInfo = createSelector(
  [getCustomerById, isCustomerFetching, getSearchCriteria],
  (customerById, isFetching, searchCriteria) => {
    if (isEmpty(customerById)) return null;

    if (isFetching) return { isFetching };

    const customerId = searchCriteria || null;
    const customer = get(customerById, customerId, {});
    return {
      ...customer,
      isFetching,
    };
  }
);
