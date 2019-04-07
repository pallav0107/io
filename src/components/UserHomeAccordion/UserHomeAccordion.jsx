import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import { Accordion, AccordionItem, Button } from '@wdpui/react-gel';
import { InputForm } from '../../components/forms';
import { Table, Tr, Td, } from '@wdpui/react-gel';
import { Field } from 'redux-form';
import { required, dayDate, dayMonth, dayYear } from '../../helpers/index';
import { Formwrapper, FormWrapper, DateText } from '../../style/style';
import DateComponent from './DateComponent';

const UserHomeAccordion = ({ onButtonClick, onLogError, dateError }) => (
  <Box>
    <Accordion lego>
      <AccordionItem label="Details">
        <FormWrapper>
          <Box width={1}>
            <label htmlFor="Title">
              Congratulations !! You have logged in successfully !!
            </label>
          </Box>
        </FormWrapper>
      </AccordionItem>
      <AccordionItem label="Modal">
        <FormWrapper>
          <Box width={1}>
            <Button
              value="Modal"
              type="button"
              label="Modal"
              styling="primary"
              onClick={() => onButtonClick('UserHome')}
            />
          </Box>
        </FormWrapper>
      </AccordionItem>
    </Accordion>
    <DateComponent logError={onLogError} dateError={dateError} minDate="01/01/2019" maxDate="01/03/2019" />
  </Box>
);

UserHomeAccordion.propTypes = {
  onButtonClick: PropTypes.func,
};

UserHomeAccordion.defaultProps = {
  onButtonClick: () => { },
  onLogError: () => { }
};

export default UserHomeAccordion;
