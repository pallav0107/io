import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Flex } from 'grid-styled';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { Login } from '../../components/Login';
import axios from 'axios';

export class LoginContainer extends Component {
  submitHandler = (data, { action }) => {
    this.authenticate(data);
  };

  authenticate(data) {
    this.props.history.push('facilite');
    const { userName, password } = data;
    // axios({
    //   url: `http://localhost:8080/exp/staff/core/v1/login?username=${userName}&password=${password}`,
    //   method: 'GET',
    // })
    //   .then(response => {
    //     if (
    //       response !== undefined &&
    //       response !== null &&
    //       response !== '' &&
    //       response.data !== undefined &&
    //       response.data !== null &&
    //       response.data !== '' &&
    //       response.data.result !== undefined &&
    //       response.data.result !== null &&
    //       response.data.result !== '' &&
    //       response.data.result.length !== 0
    //     ) {
    //       var payload = {
    //         isLoggedIn: true,
    //         username: userName,
    //         password: password,
    //       };
    //     } else {
    //       var payload = {
    //         isLoggedIn: false,
    //         username: userName,
    //         password: password,
    //       };
    //     }
    //     this.props.onLoginClick(payload);
    //   })
    //   .then(error => {
    //   console.log(error);
    //   });
  }

  componentWillReceiveProps(nextProps) {
    const { isLoggedIn } = nextProps;
    if (isLoggedIn) {
      this.props.history.push('userhome');
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submitHandler)} onKeyPress={this.onKeyPress}>
        <Flex>
          <Login handleSubmit={this.handleSubmit} />
        </Flex>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.reducer.isLoggedIn,
  dateError: state.reducer.dateError
});

const mapDispatchToProps = dispatch => ({
  onLoginClick: data => {
    dispatch({ type: 'LOGIN', value: data })
    onLogError: dateError => dispatch({ type: 'LOG_DATE_ERROR', dateError })
  },
});

LoginContainer.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  onLogError:PropTypes.func
};

LoginContainer.defaultProps = {
  handleSubmit: () => { },
  onSubmit: () => { },
  onLogError: () => { },
};

const LoginContainer1 = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({
    form: 'Login',
    destroyOnUnmount: false,
  })
)(LoginContainer);

export default LoginContainer1;
