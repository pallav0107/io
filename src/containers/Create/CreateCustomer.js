import React, { Component } from "react";
import { Panel } from '@wdpui/react-gel';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import IdentityInfo from "./IdentityInfo";
import { Button } from '@wdpui/react-gel';
import "./style.css";
class CreateCustomer extends Component {
  constructor(props) {
    super(props);
    this.personalInfoRef = React.createRef();
    this.contactInfoRef = React.createRef();
    this.identityInfoRef = React.createRef();
    this.tabs = [
      {
        title: "Personal Information",
        body: this.renderPersonalInfo()
      },
      {
        title: "Contact Information",
        body: this.renderContactInfo()
      },
      {
        title: "Identity Information",
        body: this.renderIdentityInfo()
      }
    ];
    this.state = {
      arrowFlip: 0
    };
  }

  afterCreate = () => {
    console.log('after create', NotificationManager);
    NotificationManager.success('Custome created successfully', 'Create Customer', 2000);
    setTimeout(() => {
      window.location.href = '/';
    }, 2000);
  }
  onCreateClick = () => {
    const finalObj = {
      ...this.personalInfoRef.current.getData(),
      ...this.contactInfoRef.current.getData(),
      ...this.identityInfoRef.current.getData()
    };
    this.props.onCreateClick(finalObj, this.afterCreate);
  }

  renderPersonalInfo = () => {
    return (
      <PersonalInfo 
        ref={this.personalInfoRef}
      />
    );
  };

  renderContactInfo = () => {
    return (
      <ContactInfo
        ref={this.contactInfoRef}
      />
    );
  };

  renderIdentityInfo = () => {
    return (
      <IdentityInfo 
        ref={this.identityInfoRef}
      />
    );
  };
  handleClick = (index) => {
    if (this.state.arrowFlip > -1) {
      this.setState({
        arrowFlip: -1
      });
      return;
    }
    this.setState({
      arrowFlip: index
    });
  }

  getArrowClass = (arrowFlip, index) => {
    if (arrowFlip === index) return "posAbsolute arrowUp";
    return "posAbsolute arrowDown";
  }
  render() {
    const arrowFlip = this.state.arrowFlip;
    return (
      <div className="pp">
        <div className="mb-3">
        <h2 className="alignLeft">Create Customer</h2>
        {this.tabs.map((tab, index) => {
          const arrowClass = this.getArrowClass(arrowFlip, index);
          return (
            <Panel expanded={arrowFlip === index} className="posRelative">
              <Panel.Heading onClick={() => this.handleClick(index)}>
                <Panel.Title className="alignLeft backgroundClrBlue">
                  {tab.title}
                </Panel.Title>
                <Panel.Toggle
                  componentClass="a"
                  className={arrowClass} >
                  {arrowFlip === index ? (
                    <span className="upArrow" />
                  ) : (
                    <span className="downArrow" />
                  )}
                </Panel.Toggle>
              </Panel.Heading>
              <Panel.Collapse>
                <Panel.Body>{tab.body}</Panel.Body>
              </Panel.Collapse>
            </Panel>
          );
        })}
        <div >
          <Button onClick={this.onCreateClick}>Create Customer</Button>
        </div>
        <NotificationContainer />
      </div>
      </div>
    );
  }
}

export default CreateCustomer;
