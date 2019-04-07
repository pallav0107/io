import React, { Component } from 'react';

import { reduxForm } from 'redux-form';
import { Flex } from 'grid-styled';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { withRouter } from 'react-router-dom';

import { UserHome } from '../../components/UserHome';


export class UserHomeContainer extends Component {
  constructor(propTypes) {
    super(propTypes);
  }
  render() {
    return (
      <form >
        <Flex>
          <UserHome/>
        </Flex>
      </form>
    );
  }
}


const mapStateToProps = state => ({

});


const UserHomeContainer1 = compose(
  withRouter,
  connect(
    mapStateToProps,
    null
  ),
  reduxForm({
    form: 'UserHome',
    destroyOnUnmount: false,
  })
)(UserHome);
export default UserHomeContainer1;
