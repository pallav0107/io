import React from 'react';
import { Button,ButtonGroup } from '@wdpui/react-gel';
import PropTypes from 'prop-types';
import { IconAlert } from '@wdpui/react-gel';
import styled from 'styled-components';
import { Box } from 'grid-styled';


export const ErrorIcon = styled(IconAlert)`
  color: ${({ theme }) => theme.color.danger};
  margin-bottom: 3px;
`;

const ButtonGroups = ({ input, type,name }) => (
  <Box>
    <ButtonGroup {...input}name={name} type={type} styling='hero'/>
  </Box>
);

ButtonGroups.propTypes = {
  label: PropTypes.string,
  data: PropTypes.shape({}).isRequired,
};

ButtonGroups.defaultProps = {
  label: '',
  name: '',
  value: '',
};

export default ButtonGroups;
