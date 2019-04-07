import { combineReducers } from 'redux';
import { commonReducers } from '@wdpui/common-app-wrapper';
import { reducer as reduxFormReducer } from 'redux-form';
import _ from 'lodash';
import entitiesReducer from '@wdpui/redux-exp-staff-core-v1/reducers';

function reducer(state = { isOpen: false, dateError: '',Jdata:[] }, action) {
  
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        isLoggedIn: action.value.isLoggedIn,
        username: action.value.username,
        password: action.value.password
      }
    }
    case 'DATE':
      return { ...state, date: action.value.data };
    case 'OPEN':
      return { ...state, 
        isOpen: true,
         value: action.value         
        }
    case 'Identity':
      return { ...state, isOpen: false, value: action.payload };
    case 'CLOSE':
      return { isOpen: false };
    case 'DELETE':
      return {
        ...state,

        value: _.omit(state.value, action.value),
      };
    case 'RESULTS':
      return { ...state, showResults: true, value: action.value };
    case 'LOG_DATE_ERROR':
      return { ...state, dateError: action.dateError }
      case 'DATA':
      return { ...state, Jdata: action.value }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  entities: combineReducers(entitiesReducer),
  form: reduxFormReducer,
  ...commonReducers,
  reducer,
});

export default rootReducer;
