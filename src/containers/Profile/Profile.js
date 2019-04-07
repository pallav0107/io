import React, { Component } from "react";
import "./style.css";
class Profile extends Component {
  componentDidMount() {
    this.props.onInit();
  }
  render() {
    console.log("profile");
    const customerId = this.props.match.params.profileId;
    console.log('customerId' + customerId);
    const customers = this.props.customers;
    console.log("customers" );
    console.log(customers);
    const customer = customers.filter(customer => customer._id === customerId).first();
    console.log("customer" + customer);
    if (!customer) return <div>No customer found</div>;
    return (
      <div className="mainContainer">
        <h2 className="upperCaseTxt alignLeft paddingLeft1">
          {customer.Title + customer.GivenName + customer.FamilyName}
        </h2>
        <div className="alignLeft marginBottom marginTop paddingLeft1">
          <span>{customer.BirthDate}-{customer.Gender}</span>
          <br />
          <span>Occupation:</span>
          <br />
          <span>OCC 001</span>
        </div>
        <div className="alignLeft paddingLeft1">
          <span>Contact Number: {customer.Contacts[0].ContactNumber}</span>
        </div>
        <div className="upperCaseTxt alignLeft floatRight posAbsolute paddingRight1 top2">
          <span>{customer.Address}</span>
          <br />
          <span>{customer.City}&nbsp;{customer.Country}&nbsp;{customer.PostalCode}</span>
        </div>
        <footer className="footerClr padding2">
          <span className="floatLeft ">Customer No. 93387036</span>
          <span className="floatRight ">Not Identified</span>
        </footer>
      </div>
    );
  }
}

export default Profile;
