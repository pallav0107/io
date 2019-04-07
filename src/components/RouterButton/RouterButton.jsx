import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@wdpui/react-gel';
import { withRouter } from 'react-router-dom';

class RouterButton extends Component {
  static propTypes = {
    history: PropTypes.shape({}).isRequired,
    to: PropTypes.string,
  };

  static defaultProps = {
    to: '/',
  };

  handleClick = () => {
    const { history, to } = this.props;
    history.push(to);
  };

  render() {
    return <Button onClick={this.handleClick} {...this.props} />;
  }
}

export default withRouter(RouterButton);
