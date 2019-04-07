import React from 'react';
import { compose } from 'recompose';
import { withTracking, EventTypes } from '@wdpui/common-analytics';
import { withRouter } from 'react-router';
import { Container, Backdrop } from '../common';
import { LoginContainer } from '../../containers';


export const Login = props => (
  <Container column flex="1 0 auto">
    <Backdrop align="center" justify="flex-start" column>
      <LoginContainer {...props} />
    </Backdrop>
  </Container>
);

const enhance = compose(
  withRouter,
  withTracking((state, { match }) => ({
    event: EventTypes.PAGE,
    params: {
      pageName: 'Home',
      path: match.path,
    },
  }))
);

export default enhance(
  Login
);
