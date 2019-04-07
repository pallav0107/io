import React, { Component } from "react";
import {
  Input,
  Label,
  InputGroup ,
  Radio 
} from '@wdpui/react-gel';

import { HelpBlock } from 'react-bootstrap';
import "./style.css";
import { CUSTOMER_TITLE , GIVEN_NAME, FAMILY_NAME , BIRTHDATE, GENDER } from '../constants';
class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.personalInfo = {};
  }
  addPersonalInfo = (value, category) => {
    switch(category) {
      case CUSTOMER_TITLE:
        this.personalInfo[CUSTOMER_TITLE] = value;
        break;
      case GIVEN_NAME:
        this.personalInfo[GIVEN_NAME] = value;
        break;
      case FAMILY_NAME:
        this.personalInfo[FAMILY_NAME] = value;
        break;
      case BIRTHDATE:
        this.personalInfo[BIRTHDATE] = value;
        break;
      case GENDER:
        this.personalInfo[GENDER] = value;
        break;
      default:
        break;
    }
    this.setState({});
  }

  getData = () => {
    return this.personalInfo;
  }

  render() {
    return (
      <form class="personalInfoForm">
        <InputGroup controlId="InputsSelect">
          <Label className="floatLeft">
            Title<span className="txtClrRed">(Required)</span>
          </Label>
          <Input
            componentClass="select"
            placeholder="Select Title"
            className="width100"
            onChange={e => this.addPersonalInfo(e.target.value, CUSTOMER_TITLE)}
          >
            <option value="select">select</option>
            <option value="Mr">Mr.</option>
            <option value="Mrs">Mrs.</option>
            <option value="Ms">Ms.</option>
          </Input>
        </InputGroup>

        <form inline>
          <InputGroup controlId="formInlineName" className="floatLeft">
            <Label className="floatLeft">
              Given Name(s)<span className="txtClrRed">(Required)</span>
            </Label>
            <Input
              type="text"
              placeholder="Given Name"
              className="width100"
              onChange={e => this.addPersonalInfo(e.target.value, GIVEN_NAME)}
            />
          </InputGroup>

          <InputGroup controlId="formInlineEmail" className="floatRight">
            <Label className="floatLeft">
              Family Name<span className="txtClrRed">(Required)</span>
            </Label>
            <Input
              type="email"
              placeholder="Family Name"
              className="width100"
              onChange={e => this.addPersonalInfo(e.target.value, FAMILY_NAME)}
            />
          </InputGroup>
        </form>
        <InputGroup className="marginTop15">
          <div className="floatLeft width100 alignLeft">
            <Label>
              Is the customer known by ant other name(s)?
              <span className="txtClrRed">(Required)</span>
            </Label>
          </div>

          <div className="alignLeft">
            <div className="displayInline marginRight28">
              <Radio name="radioGroup" inline checked>
                Yes, Enter Details
              </Radio>
            </div>
            <div className="displayInline">
              <Radio name="radioGroup" inline>
                No, Not applicable
              </Radio>
            </div>
          </div>
        </InputGroup>
        <div className="width60">
          <InputGroup>
            <InputGroup>
              <Input type="text" placeholder="Enter Name" />
              <InputGroup.Addon>
                <input type="radio" aria-label="..." />
              </InputGroup.Addon>
            </InputGroup>
            <div className="floatRight">
              <HelpBlock>Is this preferred Name?</HelpBlock>
            </div>
          </InputGroup>
        </div>
        <div className="width60">
          <InputGroup>
            <InputGroup>
              <Input type="text" placeholder="Enter Name" />
              <InputGroup.Addon>
                <input type="radio" aria-label="..." />
              </InputGroup.Addon>
            </InputGroup>
            <div className="floatRight">
              <HelpBlock>Is this preferred Name?</HelpBlock>
            </div>
          </InputGroup>
        </div>
        <InputGroup>
          <div className="floatLeft">
            <Label>
              Date of birth<span className="txtClrRed">(Required)</span>
            </Label>
          </div>
          <div className="floatLeft width100">
            <Input
              type="text"
              placeholder="Enter text"
              className="width100"
              onChange={e => this.addPersonalInfo(e.target.value, BIRTHDATE)}
            />
          </div>
        </InputGroup>
        <InputGroup className="marginTop15">
          <div className="floatLeft width100 alignLeft">
            <Label>
              Gender
              <span className="txtClrRed">(Required)</span>
            </Label>
          </div>

          <div className="alignLeft">
            <div className="displayInline marginRight28">
              <Radio defaultValue="Male" name="radioGroup1" onChange={e => this.addPersonalInfo(e.target.value, GENDER)} inline checked={this.personalInfo[GENDER] === 'Male'}>
                Male
              </Radio>
            </div>
            <div className="displayInline">
              <Radio defaultValue="FeMale" name="radioGroup1" onChange={e => this.addPersonalInfo(e.target.value, GENDER)} inline checked={this.personalInfo[GENDER] === 'FeMale'}>
                Female
              </Radio>
            </div>
          </div>
        </InputGroup>
        <InputGroup controlId="InputsSelect">
          <Label className="floatLeft">Marital Status</Label>
          <Input
            componentClass="select"
            placeholder="Select Status"
            className="width100"
          >
            <option value="select">select</option>
            <option value="other">...</option>
          </Input>
        </InputGroup>
        <InputGroup controlId="InputsSelect">
          <Label className="floatLeft">Employment Type</Label>
          <Input
            componentClass="select"
            placeholder="Select Employment Type"
            className="width100"
          >
            <option value="select">select</option>
            <option value="other">...</option>
          </Input>
        </InputGroup>
        <InputGroup controlId="InputsSelect">
          <Label className="floatLeft">Occupation</Label>
          <Input
            componentClass="select"
            placeholder="Select Occupation"
            className="width100"
          >
            <option value="select">select</option>
            <option value="other">...</option>
          </Input>
        </InputGroup>
      </form>
    );
  }
}

export default PersonalInfo;
