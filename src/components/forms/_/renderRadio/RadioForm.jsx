import React from 'react';
import { Radio } from '@wdpui/react-gel';
import PropTypes from 'prop-types';
import { IconAlert } from '@wdpui/react-gel';
import styled from 'styled-components';
import { Box } from 'grid-styled';

const StyledRadio = styled(Radio)`
  word-wrap: break-word;
`;
export const ErrorIcon = styled(IconAlert)`
  color: ${({ theme }) => theme.color.danger};
  margin-bottom: 3px;
`;

const RadioForm = ({ input, data ,flip,alertType}) => (
  <Box>
    {data.map(key => (
      <StyledRadio {...input} label={key} value={key} flip={flip} alertType={alertType} mx={4} mr={5} />
    ))}
  </Box>
);

RadioForm.propTypes = {
  label: PropTypes.string,
  data: PropTypes.shape({}).isRequired,
};

RadioForm.defaultProps = {
  label: '',
  name: '',
  value: '',
};

export default RadioForm;
