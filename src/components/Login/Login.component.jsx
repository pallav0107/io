import React from 'react';
import { Button } from '@wdpui/react-gel';
import { Field } from 'redux-form';
import { InputForm } from '../forms';
import { FormWrapperCol } from '../../style/style';
import { required } from '../../helpers';

export const LoginForm = ({ }) => (
  <FormWrapperCol>
    <Field
      name="userName"
      type="text"
      placeholder="Username"
      component={InputForm}
      validate={required}
    />
    <Field
      name="password"
      type="password"
      placeholder="Password"
      component={InputForm}
      validate={required}
    />
    <Button value="Login" type="submit" label="Login" styling="primary" />
  </FormWrapperCol>
);


export default LoginForm;
