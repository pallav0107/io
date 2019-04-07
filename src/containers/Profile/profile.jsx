import { connect } from 'react-redux';
import { fetchCustomers } from '../../redux/actionCreators';
import Profile from './Profile';
const mapStateToProps = state => {
  return {
    customers: state.searchCustomers.customers
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onInit: () => {
      fetchCustomers(dispatch); 
    }
  }
}
const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
export default ProfileContainer;