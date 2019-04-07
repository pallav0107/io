import React from 'react';
import PropTypes from 'prop-types';
import { AlertText } from '@wdpui/react-gel';
import { ErrorIcon, Styledselect } from '../../../../style/style';
import { Box } from 'grid-styled';

const SelectForm = ({
  input,
  meta: { touched, error },
  options,
  id,
  disabled,
}) => (
  <Box>
    <Styledselect
      {...input}
      alertType={touched && error ? 'danger' : null}
      disabled={disabled}
    >
      <option value="">Please Select</option>
      {id !== 'CountryFlag' &&
        options.map(key => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      {id === 'CountryFlag' &&
        options.map(key => (
          <option className="in flag" key={key} value={key} />
        ))}
    </Styledselect>
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

SelectForm.propTypes = {
  options: PropTypes.shape([]).isRequired,
  id: PropTypes.string,
  disabled: PropTypes.bool,
};

SelectForm.defaultProps = {
  id: null,
  disabled: false,
};

export default SelectForm;
