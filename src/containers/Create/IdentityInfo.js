import React, { Component } from "react";
import {
  Input,
  Label,
  InputGroup,
  Modal,
  Button,
  ButtonGroup
} from '@wdpui/react-gel';

import { ISSUE_DATE , EXPIRY_DATE, PASSPORT_NUMBER } from '../constants';

class IdentityInfo extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.identityInfo = {};
    this.identityInfo['Passport'] = {};
    this.state = {
      show: false,
      showIdentity: false,
      showLicence: false
    };
  }

  addIdentityInfo = (value, category, merge) => {
    switch(category) {
      case ISSUE_DATE:
      this.identityInfo['Passport'][ISSUE_DATE] = value;
        break;
      case EXPIRY_DATE:
        this.identityInfo['Passport'][EXPIRY_DATE] = value;
        break;
      case PASSPORT_NUMBER:
      this.identityInfo['Passport'][PASSPORT_NUMBER] = value;
        break;
      default:
        break;
    }
    console.log('identityInfo', this.identityInfo)
    this.setState({});
  }

  getData = () => {
    return this.identityInfo;
  }

  handleClose() {
    this.setState({ show: false, showIdentity: false, showLicence: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  handleShowIdentityCard() {
    this.setState({
      showIdentity: true
    });
  }
  handleShowLicence() {
    this.setState({
      showLicence: true
    });
  }
  render() {
    return (
      <form>
        <div className="width70 marginBottom15">
          <InputGroup>
            <InputGroup>
              <InputGroup.Addon>a</InputGroup.Addon>
              <Input
                type="text"
                placeholder="Passport"
                onClick={this.handleShow}
              />
            </InputGroup>
            <div>
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header className="alignLeft" closeButton>
                  <Modal.Title>Passport</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <form>
                    <InputGroup>
                      <div className="floatLeft">
                        <Label>
                          Issue Date
                          <span className="txtClrRed">(Required)</span>
                        </Label>
                      </div>
                      <div className="floatLeft width100">
                        <Input
                          type="text"
                          placeholder="dd/mm/yyyy"
                          className="width100"
                          onChange={e => this.addIdentityInfo(e.target.value, ISSUE_DATE)}
                        />
                      </div>
                    </InputGroup>
                    <InputGroup>
                      <div className="floatLeft">
                        <Label>
                          Expire Date
                          <span className="txtClrRed">(Required)</span>
                        </Label>
                      </div>
                      <div className="floatLeft width100">
                        <Input
                          type="text"
                          placeholder="dd/mm/yyyy"
                          className="width100"
                          onChange={e => this.addIdentityInfo(e.target.value, EXPIRY_DATE)}
                        />
                      </div>
                    </InputGroup>
                    <InputGroup>
                      <div className="floatLeft">
                        <Label>
                          Passport Number
                          <span className="txtClrRed">(Required)</span>
                        </Label>
                      </div>
                      <div className="floatLeft width100">
                        <Input
                          type="text"
                          className="width100 marginBottom15"
                          onChange={e => this.addIdentityInfo(e.target.value, PASSPORT_NUMBER)}
                        />
                      </div>
                    </InputGroup>
                  </form>
                </Modal.Body>
                <ButtonGroup>
                  <Button
                    className="marginBottom15 btnWidth50"
                    bsSize="xsmall"
                    onClick={this.handleClose}
                  >
                    Close
                  </Button>
                  <Button
                    bsStyle="danger"
                    className="btnWidth50"
                    bsSize="xsmall"
                    onClick={this.handleClose}
                  >
                    Save Changes
                  </Button>
                </ButtonGroup>
              </Modal>
            </div>
          </InputGroup>
        </div>
        <div className="width70 marginBottom15">
          <InputGroup>
            <InputGroup>
              <InputGroup.Addon>b</InputGroup.Addon>
              <Input
                type="text"
                placeholder="Licence"
                onClick={this.handleShowLicence.bind(this)}
              />
            </InputGroup>
            <div>
              <Modal show={this.state.showLicence} onHide={this.handleClose}>
                <Modal.Header className="alignLeft" closeButton>
                  <Modal.Title>Licence</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <form>
                    <InputGroup>
                      <div className="floatLeft">
                        <Label>
                          Issue Date
                          <span className="txtClrRed">(Required)</span>
                        </Label>
                      </div>
                      <div className="floatLeft width100">
                        <Input
                          type="text"
                          placeholder="dd/mm/yyyy"
                          className="width100"
                        />
                      </div>
                    </InputGroup>
                    <InputGroup>
                      <div className="floatLeft">
                        <Label>
                          Expire Date
                          <span className="txtClrRed">(Required)</span>
                        </Label>
                      </div>
                      <div className="floatLeft width100">
                        <Input
                          type="text"
                          placeholder="dd/mm/yyyy"
                          className="width100"
                        />
                      </div>
                    </InputGroup>
                    <InputGroup>
                      <div className="floatLeft">
                        <Label>
                          Licence Number
                          <span className="txtClrRed">(Required)</span>
                        </Label>
                      </div>
                      <div className="floatLeft width100">
                        <Input
                          type="text"
                          className="width100 marginBottom15"
                        />
                      </div>
                    </InputGroup>
                  </form>
                </Modal.Body>
                <ButtonGroup>
                  <Button
                    className="marginBottom15 btnWidth50"
                    bsSize="xsmall"
                    onClick={this.handleClose}
                  >
                    Close
                  </Button>
                  <Button
                    bsStyle="danger"
                    className="btnWidth50"
                    bsSize="xsmall"
                    onClick={this.handleClose}
                  >
                    Save Changes
                  </Button>
                </ButtonGroup>
              </Modal>
            </div>
          </InputGroup>
        </div>
        <div className="width70 marginBottom15">
          <InputGroup>
            <InputGroup>
              <InputGroup.Addon>c</InputGroup.Addon>
              <Input
                type="text"
                placeholder="National Identity Card"
                onClick={this.handleShowIdentityCard.bind(this)}
              />
            </InputGroup>
            <div>
              <Modal show={this.state.showIdentity} onHide={this.handleClose}>
                <Modal.Header className="alignLeft" closeButton>
                  <Modal.Title>National Identity Card</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <form>
                    <InputGroup>
                      <div className="floatLeft">
                        <Label>
                          Issue Date
                          <span className="txtClrRed">(Required)</span>
                        </Label>
                      </div>
                      <div className="floatLeft width100">
                        <Input
                          type="text"
                          placeholder="dd/mm/yyyy"
                          className="width100"
                        />
                      </div>
                    </InputGroup>
                    <InputGroup>
                      <div className="floatLeft">
                        <Label>
                          Expire Date
                          <span className="txtClrRed">(Required)</span>
                        </Label>
                      </div>
                      <div className="floatLeft width100">
                        <Input
                          type="text"
                          placeholder="dd/mm/yyyy"
                          className="width100"
                        />
                      </div>
                    </InputGroup>
                    <InputGroup>
                      <div className="floatLeft">
                        <Label>
                          Card Number
                          <span className="txtClrRed">(Required)</span>
                        </Label>
                      </div>
                      <div className="floatLeft width100">
                        <Input
                          type="text"
                          className="width100 marginBottom15"
                        />
                      </div>
                    </InputGroup>
                  </form>
                </Modal.Body>
                <ButtonGroup>
                  <Button
                    className="marginBottom15 btnWidth50"
                    bsSize="xsmall"
                    onClick={this.handleClose}
                  >
                    Close
                  </Button>
                  <Button
                    bsStyle="danger"
                    className="btnWidth50"
                    bsSize="xsmall"
                    onClick={this.handleClose}
                  >
                    Save Changes
                  </Button>
                </ButtonGroup>
              </Modal>
            </div>
          </InputGroup>
        </div>
      </form>
    );
  }
}

export default IdentityInfo;
