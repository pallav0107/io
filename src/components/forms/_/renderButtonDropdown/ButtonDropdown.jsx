import React from 'react';
import PropTypes from 'prop-types';
import {
  DropdownTrigger,
  DropdownHeadline,
  DropdownButton,
} from '@wdpui/react-gel';
export const determineValidation = (touched, error) => {
  if (touched && error) return 'danger';
  return null;
};

const renderButtonDropdown = ({
  input,
  type,
  placeholder,
  meta: { touched, error },
}) => (
  <span>
    <DropdownTrigger
      dropdown={<DropdownHeadline>Small dropdown</DropdownHeadline>}
      dropdownSize="small"
    >
      <DropdownButton
        styling="neutral"
        label="Small Dropdown Button"
        type="button"
      />
    </DropdownTrigger>
  </span>
);

renderButtonDropdown.propTypes = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
};

renderButtonDropdown.defaultProps = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: null,
};

export default renderButtonDropdown;
