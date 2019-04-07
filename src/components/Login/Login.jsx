import React from 'react';
import PropTypes from 'prop-types';
import { Text, IconPadlock } from '@wdpui/react-gel';
import Box from 'grid-styled/dist/Box';
import { SearchContainer } from '../../style/style';
import { LoginForm } from './Login.component';

export const Login = ({
}) => (
  <Box>
    <SearchContainer>
      <Text brand size={5} is="h1">
        <IconPadlock /> Login here
      </Text>
        <LoginForm />
    </SearchContainer>
  </Box>
);

Login.propTypes = {
  onSubmit: PropTypes.func,
};
Login.defaultProps = {
  onSubmit: () => {},
};

export default Login;
