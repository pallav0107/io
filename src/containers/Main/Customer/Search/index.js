import { connect } from 'react-redux';
import { fetchCustomers, searchCustomers } from '../../../../redux/actionCreators';
import Search from './Search';
const mapStateToProps = state => {
  return {
    customers: state.searchCustomers.customers
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onInit: () => {
      fetchCustomers(dispatch); 
    },
    onSearchClick: (searchObj) => {
      searchCustomers(dispatch, searchObj);
    }
  }
}
const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);


export default SearchContainer;