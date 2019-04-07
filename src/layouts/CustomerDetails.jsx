import React from 'react';
import { compose } from 'recompose';
import { withTracking, EventTypes } from '@wdpui/common-analytics';
import { withRouter } from 'react-router';
import { Container, Backdrop } from './common';
// import { CustomerSearchContainer } from '../containers/CustomerSearchContainer';
import { Main } from '../containers/Main/index.js';
import { ProfileContainer } from '../containers/Profile/index.js';
import { CreateContainer } from '../containers/Create';
import SearchContainer from '../containers/Main/Customer/Search';

export const CustomerDetails = () => (
  <Container column flex="1 0 auto">
    <Backdrop align="center" justify="flex-start" column>
      <Main />
    </Backdrop>
  </Container>
);


export const CustomerCreate = () => (
  <Container column flex="1 0 auto">
    <Backdrop align="center" justify="flex-start" column>
      <CreateContainer></CreateContainer> 
    </Backdrop>
  </Container>
);


export const CustomerProfile = () => (
  <Container column flex="1 0 auto">
    <Backdrop align="center" justify="flex-start" column>
      <ProfileContainer></ProfileContainer>
    </Backdrop>
  </Container>
);

export const CustomerSearch = () => (
  <Container column flex="1 0 auto">
    <Backdrop align="center" justify="flex-start" column>
      <SearchContainer></SearchContainer>
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

export default enhance(CustomerDetails);
