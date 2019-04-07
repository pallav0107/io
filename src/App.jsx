import React from 'react';
import { compose } from 'recompose';
import { AppWrapper } from '@wdpui/common-app-wrapper';
import { MasterLayout } from './layouts/Master';
import Routes from './routes/routes';

export const App = () => (
  <MasterLayout>
    <Routes />
  </MasterLayout>
);

const myCustomTheme = {
  components: [
    {
      testComponent: {
        color: '#fff',
      },
    },
  ],
};

const options = {
  env: process.env.NODE_ENV,
  homepage: process.env.REACT_APP_HOMEPAGE,
  sso: {
    enable: true,
  },
  analytics: {
    enable: true,
    vendors: ['omniture'],
  },
  customThemes: [myCustomTheme],
  guidedLearning: false,
};

const enhancedApp = compose(AppWrapper(options));

export default enhancedApp(App);
