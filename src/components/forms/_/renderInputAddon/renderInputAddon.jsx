import React from 'react';
import PropTypes from 'prop-types';
import { Button, AlertText } from '@wdpui/react-gel';

import { Box } from 'grid-styled';
import { ErrorIcon, StyledInputAddon } from '../../../../style/style';

const renderInputAddon = ({ input, meta: { touched, error }, disabled }) => (
  <Box>
    <StyledInputAddon
      {...input}
      alertType={touched && error ? 'danger' : null}
      disabled={disabled}
    >
      <label htmlFor="Passport">
        <Button type="button" label="Go" styling="hero" />
      </label>
    </StyledInputAddon>
    <span>
      {touched && error && (
        <AlertText styling="danger">
          {' '}
          <ErrorIcon size="xsmall" /> Please select a value! It is a {error}{' '}
          Field.
        </AlertText>
      )}
    </span>
  </Box>
);

renderInputAddon.propTypes = {
  input: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  meta: PropTypes.shape({
    params: PropTypes.object,
  }),
  anotherNameCount: PropTypes.number,
};

renderInputAddon.defaultProps = {
  label: null,
  disabled: false,
  input: null,
  meta: {},
  anotherNameCount: null,
};

export default renderInputAddon;
