import React, { Component } from 'react'
import { BackFacilitie } from '../../components/BackFacilitie'
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

export class BackFacilitieContainer extends Component {
  handleSubmit=()=>{
    alert("Done")
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <Flex>
        <BackFacilitie/>
      </Flex>
    )
  }
}

BackFacilitieContainer.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func
};

BackFacilitieContainer.defaultProps = {
  handleSubmit: () => { },
  onSubmit: () => { }
};



const mapStateToProps = state =>({
  isOpen: state.reducer.isOpen
});

const mapDispatchToProps = dispatch => ({
  open: () => dispatch({ type: 'OPEN' }),
  close: () => dispatch({ type: 'CLOSE' })
});

const BackFacilitieContainer1 = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps),
  reduxForm({
    form: 'BackFacilitie',
    destroyOnUnmount: false,
  })
)(BackFacilitie);

export default BackFacilitieContainer1;
