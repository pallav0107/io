import React from 'react';
import { Header, Button } from '@wdpui/react-gel';

const PageHeader = () => (
  <Header
    logoLarge
    logoCenterXs
    leftArrow
    leftArrowAction={() => window.history.back()}
  >
    <Button
      styling="faint"
      soft
      label="Sign out"
      responsive={{ xs: 'small', sm: 'medium' }}
      onClick={() => alert('Sign Out Clicked')}
    />
  </Header>
);

export default PageHeader;
