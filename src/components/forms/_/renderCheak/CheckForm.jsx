import React from 'react';
import { Checkbox } from '@wdpui/gel-checkbox';
import PropTypes from 'prop-types';
import { IconAlert } from '@wdpui/react-gel';
import styled from 'styled-components';
import { Box } from 'grid-styled';

const StyledRadio = styled(Checkbox)`
  word-wrap: break-word;
`;
export const ErrorIcon = styled(IconAlert)`
  color: ${({ theme }) => theme.color.danger};
  margin-bottom: 3px;
`;

const CheckForm = ({ input, data }) => (
  <Box>
    {data.map(key => (
      <StyledRadio {...input} label={key} value={key} mx={4} mr={5} />
    ))}
  </Box>
);

CheckForm.propTypes = {
  label: PropTypes.string,
  data: PropTypes.shape({}).isRequired,
};

CheckForm.defaultProps = {
  label: '',
  name: '',
  value: '',
};

export default CheckForm;
