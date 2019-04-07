import React from 'react';
import { IconAdd, IconClose } from '@wdpui/react-gel';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Flex, Box } from 'grid-styled';
import { InputForm } from '../renderInputField';
import { UIBlock, LIBlock } from '../../../../style/style';

const renderHobbies = ({ fields, meta: { error } }) => (
  <Flex>
    <UIBlock>
      {fields.map((hobby, index) => (
        <LIBlock key={index}>
          <Field
            name={hobby}
            type="text"
            component={InputForm}
            label={`Hobby #${index + 1}`}
          />
          <IconClose onClick={() => fields.remove(index)} mt={8} ml={5} />
        </LIBlock>
      ))}
      <li>
        <IconAdd onClick={() => fields.push()} />
        <span>Add Another Alternate name</span>
      </li>
      {error && <li className="error">{error}</li>}
    </UIBlock>
  </Flex>
);

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
  <Box>
    <Field
      name="another1"
      type="text"
      component={InputForm}
      label="First Name"
    />

    <FieldArray name="addmorenames" component={renderHobbies} />
  </Box>
);

const FieldArraysForm = props => {
  return <FieldArray name="members" component={renderMembers} />;
};

export default reduxForm({
  form: 'fieldArrays',
})(FieldArraysForm);
