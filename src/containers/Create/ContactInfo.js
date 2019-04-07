import React, { Component } from "react";
import {
  Input,
  Label,
  InputGroup
} from '@wdpui/react-gel';

import "./style.css";
import { EMAIL ,ADDRESS, CITY, POSTAL_CODE, COUNTRY, CONTACT_COUNTRY, CONTACT_NUMBER, CONTACT_TYPE } from '../constants';
class ContactInfo extends Component {
  constructor(props) {
    super(props);
    this.contactInfo = {};
   
    this.state = {
      initialStage: true,
      addOtherNumber: false
    }
  }
  addContactInfo = (value, category, merge) => {
 
    switch(category) {
      case EMAIL:
        this.contactInfo[EMAIL] = value;
        break;
      case ADDRESS:
        this.contactInfo[ADDRESS] = this.contactInfo[ADDRESS] ? this.contactInfo[ADDRESS] + value : value;
        break;
      case CITY:
        this.contactInfo[CITY] = value;
        break;
      case POSTAL_CODE:
        this.contactInfo[POSTAL_CODE] = value;
        break;
      case COUNTRY:
        this.contactInfo[COUNTRY] = value;
        break;
      default:
        break;
    }
    console.log('this.this.contactInfo', this.contactInfo);
    this.setState({});
  }

  getData = () => {
    return this.contactInfo;
  }

  addAnotherNumber1 = () => {
    this.setState({ initialStage: false, addOtherNumber: true })
  }

  renderContactNumber = () => {
    return (
      <div className="width100">
        <div className="displayInline">
          <Input
            componentClass="select"
            placeholder="Country"
            className="marginBottom15"
            onChange={e => this.addContactInfo(e.target.value, CONTACT_COUNTRY)}
          >
            <option value="country">country</option>
            <option value="Australia">Australia</option>
            <option value="USA">USA</option>
          </Input>
        </div>
        <div className="displayInline">
          <Input
            type="text"
            placeholder="88888 88888"
            className="marginRight3 marginBottom15"
            onChange={e => this.addContactInfo(e.target.value, CONTACT_NUMBER)}
          />
        </div>
        <div className="displayInline">
          <Input
            componentClass="select"
            placeholder="Mobile"
            className="marginBottom15"
            onChange={e => this.addContactInfo(e.target.value, CONTACT_TYPE)}
          >
            <option value="Mobile">Mobile</option>
            <option value="Home">Home</option>
            <option value="Office">Office</option>
          </Input>
        </div>
      </div>
    );
  }

  render() {
    
    return (
      <form>
        <InputGroup>
          <div>
            <Label className="width100 alignLeft">
              Email Address<span className="txtClrRed">(Required)</span>
            </Label>
          </div>
          <div className="floatLeft width100">
            <Input
              type="email"
              placeholder="Email address"
              className="width40"
              className="marginBottom15 width43"
              onChange={e => this.addContactInfo(e.target.value, EMAIL)}
            />
          </div>
        </InputGroup>
        <InputGroup>
          <div className="floatLeft">
            <Label>
              Address<span className="txtClrRed">(Required)</span>
            </Label>
          </div>
          <div className="floatLeft width100">
            <div>
              <Input type="text" className="width100 marginBottom15" onChange={e => this.addContactInfo(e.target.value, ADDRESS, true)}
                />
            </div>
            <div>
              <Input type="text" className="width100" onChange={e => this.addContactInfo(e.target.value, ADDRESS, true)} />
            </div>
          </div>
        </InputGroup>

        <form inline class="marginBottom15">
          <InputGroup controlId="formInlineName" className="floatLeft">
            <Label className="floatLeft">
              Subhurb / City(s)<span className="txtClrRed">
                (Required)
              </span>
            </Label>
            <Input type="text" className="width100" onChange={e => this.addContactInfo(e.target.value, CITY)} />
          </InputGroup>

          <InputGroup controlId="formInlineEmail" className="floatRight">
            <Label className="floatLeft">
              Post Code<span className="txtClrRed">(Required)</span>
            </Label>
            <Input type="text" placeholder="E.g 2000" className="width100" onChange={e => this.addContactInfo(e.target.value, POSTAL_CODE)} />
          </InputGroup>
        </form>

        <div>
          <InputGroup controlId="InputsSelect">
            <Label className="floatLeft">
              Country<span className="txtClrRed">(Required)</span>
            </Label>
            <Input
              componentClass="select"
              placeholder="Select Title"
              className="width100"
              onChange={e => this.addContactInfo(e.target.value, COUNTRY)} 
            >
              <option value="select">select Country</option>
              <option value="Australia">Australia</option>
              <option value="USA">USA</option>
            </Input>
          </InputGroup>
        </div>
      </form>
    );
  }
}

export default ContactInfo;
