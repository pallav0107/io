import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '@wdpui/react-gel';
import {
  ErrorIcon,
  InputErrorWrapper,
  ErrorText,
} from '../../../../style/style';

export const determineValidation = (touched, error) => {
  if (touched && error) return 'danger';
  return null;
};

const InputForm = ({ input, type, multiline,rows, placeholder,meta: { touched, error } }) => (
  <span>
    {(type === 'text' ||
      type === 'email' ||
      type === 'number' ||
      type === 'password' ||
      type === 'Date') && (
      <Input {...input} type={type} placeholder={placeholder} multiline={multiline} rows={rows}/>
    )}
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
  placeholder: PropTypes.string,
};

InputForm.defaultProps = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: null,
};

export default InputForm;
