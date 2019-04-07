import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import { Tab } from '@wdpui/gel-accordion';
import { SearchContainer, Tabes } from '../../style/style';
import Facilities from './Facilities';

// export class FormMenu extends Component {
//   render() {
//     return (
      const FormMenu = ({ onClickBtn, Jdata }) => (
      <Flex>
        <SearchContainer>
          <Tabes activeTab={2} >
            <Tab label='Entities' tabRef='step 1'>Entities</Tab>
            <Tab label='Assets'>Assets</Tab>
            <Tab label="Facility" >
              <Facilities  onClickBtn={onClickBtn} Jdata={Jdata}/>
            </Tab>
            <Tab label='business Financials' >business Financials</Tab>
            <Tab label='Personal Financials' >Personal Financials</Tab>
            <Tab label='Summary'>Summary</Tab>
          </Tabes>
        </SearchContainer>
      </Flex>
    )
//   }
// }

FormMenu.propTypes = {
  onClickBtn: PropTypes.func,
};

FormMenu.defaultProps = {
  onClickBtn: () => { }
};

export default FormMenu;
