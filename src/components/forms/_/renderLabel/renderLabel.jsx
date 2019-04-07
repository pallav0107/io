import React from 'react';
import PropTypes from 'prop-types';
import { InputErrorWrapper } from '../../../../style/style';

const InputForm = ({ input, type, meta: { touched, error } }) => (
  <span>
    {(type === 'text' ||
      type === 'email' ||
      type === 'number' ||
      type === 'Date') && <Input {...input} type={type} />}
    {touched &&
      (error && (
        <InputErrorWrapper>
          <ErrorIcon size="xsmall" />
          <ErrorText styling="danger">{error}</ErrorText>
        </InputErrorWrapper>
      ))}
  </span>
);

InputForm.propTypes = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};

InputForm.defaultProps = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};

export default InputForm;
