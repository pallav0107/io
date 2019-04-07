import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '@wdpui/react-gel';
import {
  ErrorIcon,
  InputErrorWrapper,
  ErrorText,
} from '../../../../style/style';

const InputDate = ({ input, type, placeholder,onFieldBlur,min,max,meta: { touched, error } }) => (
    <span>
      {(type === 'text' ||
        type === 'Date') && (
        <Input {...input} type={type} placeholder={placeholder} onBlur={onFieldBlur} min={min} max={max} />
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
  InputDate.propTypes = {
    input: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
  };
  
  InputDate.defaultProps = {
    input: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired,
    placeholder: null,
  };
  
  export default InputDate;