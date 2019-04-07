import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateCustomer from './CreateCustomer';
import { createCustomer } from '../../redux/actionCreators';


export class CreateContainer extends Component {
  

 

  render() {
    const { customer, isFetching } = this.props;

  

    return <div>asdsd</div>;
  }
}
const mapStateToProps = state => {
  return {
    customers: state.searchCustomers.customers
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onCreateClick: (customerObj, callBack) => {
      createCustomer(dispatch, customerObj, callBack);
    }
  }
}
// const CreateContainer1 = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CreateCustomer);
// export default CreateContainer1;

export default connect(mapStateToProps,mapDispatchToProps)(CreateContainer);