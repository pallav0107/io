import React, { Component } from "react";
import {
  Button,
  Input,
  InputGroup,
  Label
} from "@wdpui/react-gel";
import { Col, Row } from 'react-bootstrap';

import { GIVEN_NAME, FAMILY_NAME, CITY, BIRTHDATE } from '../../../../constants';
import "./style.css";

class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchObject: {},
      flip: false
    };
  }

  handleChange(e, category) {
    const tempObj = this.state.searchObject;
    switch (category) {
      case GIVEN_NAME:
        tempObj[GIVEN_NAME] = e.target.value;
        break;
      case FAMILY_NAME:
        tempObj[FAMILY_NAME] = e.target.value;
        break;
      case BIRTHDATE:
        tempObj[BIRTHDATE] = e.target.value;
        break;
      case CITY:
        tempObj[CITY] = e.target.value;
        break;
      default:
        break;
    }
    this.setState({ searchObject: tempObj });
  }
  searchClick = () => {
    const { searchObject } = this.state;
    this.props && this.props.onSearchClick(searchObject);
  }

  render() {
    const { searchObject } = this.state;
    return (
      <form>
        <InputGroup>
          <Label>Search for the Customer</Label>
          <Row className="show-grid">
            <Col>
              <Input
                type="text"
                value={searchObject[GIVEN_NAME]}
                placeholder="Given Name(s)"
                onChange={(e) => this.handleChange(e, GIVEN_NAME)}
              />
            </Col>
            <Col>
              <Input
                type="text"
                value={searchObject[FAMILY_NAME]}
                placeholder="Family Name"
                onChange={(e) => this.handleChange(e, FAMILY_NAME)}
              />
            </Col>
            <Col>
              <Input
                type="text"
                value={searchObject[BIRTHDATE]}
                placeholder="dd/mm/yy"
                onChange={(e) => this.handleChange(e, BIRTHDATE)}
              />
            </Col>
            <Col>
              <Input
                type="text"
                value={searchObject[CITY]}
                placeholder="Suburb/City"
                onChange={(e) => this.handleChange(e, CITY)}
              />
            </Col>
            <Col>
              <Button  onClick={this.searchClick}>  
              {/* bsStyle="danger" */}
                Search
              </Button>
            </Col>
          </Row>
        </InputGroup>
      </form>
    );
  }
}

export default SearchHeader;
