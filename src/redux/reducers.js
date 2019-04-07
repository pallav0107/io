import Immutable from 'seamless-immutable';
import * as actionTypes from './actionTypes';

const initialState = Immutable({
  customers: []
});

const searchCustomers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CUSTOMERS:
    case actionTypes.SEARCH_CUSTOMERS:
      return {
        ...state,
        customers: action.payload
      };
    case actionTypes.CREATE_CUSTOMER:
      console.log('state', state);
      return {
        ...state
      };
    default:
      return state;
  }
};

export default searchCustomers;