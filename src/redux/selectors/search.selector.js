import { get } from 'lodash';

export const getSearchCriteria = state =>
  get(state, 'form.customerSearch.values.customerId', {});
