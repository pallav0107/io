import axios from 'axios';
import * as actions from './actions';

export async function fetchCustomers(dispatch) {
  return await axios.get(`http://localhost:5000/api/customers`).then(res => {
    if (res) {
      dispatch({ ...actions.fetchCustomers, payload: res.data });
    }
  });
}

export async function searchCustomers(dispatch, searchObj) {
  let url = "http://localhost:5000/api/customers?";
  if (!searchObj.GivenName && !searchObj.FamilyName && !searchObj.BirthDate && !searchObj.City) {
    return await axios.get(`http://localhost:5000/api/customers`).then(res => {
      if (res) {
        dispatch({ ...actions.searchCustomers, payload: res.data });
      }
    });
  }
  if(searchObj.GivenName) {
    url = url + 'GivenName=' + searchObj.GivenName;
  }
  if(searchObj.FamilyName) {
    url = url + '&FamilyName=' + searchObj.FamilyName;
  } 
  if(searchObj.BirthDate) {
    url = url + '&BirthDate=' + searchObj.BirthDate;
  } 
  if(searchObj.City) {
    url = url + '&City=' + searchObj.City;
  }
  return await axios.get(url).then(res => {
    if (res) {
      dispatch({ ...actions.searchCustomers, payload: res.data });
    }
  });
}

export async function createCustomer(dispatch, customerObj, callBack) {
  const finalCustomerObj = {
    ...customerObj,
    "Contacts": [{ "ContactCountry": "India", "ContactNumber": "123456789", "ContactType": "Mobile" }, { "ContactCountry": "India", "ContactNumber": "123456789", "ContactType": "Home" }]
  }
  return axios.post(`http://localhost:5000/api/customer`, finalCustomerObj)
    .then((res) => {
      dispatch({ ...actions.createCustomer, payload: res.data});
      callBack();
    })
}