import React, { Component } from 'react'
import { FormMenu } from '../../components/FormMenu'
import { reduxForm } from 'redux-form';
import { Flex } from 'grid-styled';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

export class FormMenuContainer extends Component {
  render() {
    return (
      <Flex>
        <FormMenu />
      </Flex>
    )
  }
}

const mapStateToProps = state => ({
Jdata: state.reducer.Jdata
});

const mapDispatchToProps = dispatch => ({
  
  onClickBtn: data => {
    dispatch({ type: 'DATA', value: data })
  }
});

const FormMenuContainer1 = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({
    form: 'FormMenu',
    destroyOnUnmount: false,
  })
)(FormMenu);

export default FormMenuContainer1;
