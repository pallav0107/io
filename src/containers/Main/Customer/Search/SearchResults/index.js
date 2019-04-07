import React, { Component } from "react";
import { Col, Row, Grid } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
class SearchResults extends Component {
  render() {
    if (!this.props.customers) return null;
    const list = this.props.customers;
    return (
      <div>
        <h2>Search Results</h2>
        <hr />
        <Grid className="bgClr">
          <Row className="show-grid bb p-1 size">
            <Col sm={6}>Customer Details</Col>
            <Col sm={6}>Address</Col>
          </Row>
          {list.map(listItem => {
            const link = "/profile/" + listItem._id;
            return (
              <Link exact to={link}>
                <Row
                  className="show-grid bb p-1 size"
                >
                  <Col sm={6}>
                    <Row className="show-grid">{listItem.GivenName + listItem.FamilyName}</Row>
                    <Row className="show-grid">{listItem.BirthDate}</Row>
                  </Col>
                  <Col sm={6}>
                    <Row className="show-grid">{listItem.Address}</Row>
                    <Row className="show-grid">{listItem.City}</Row>
                  </Col>
                </Row>
              </Link>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default SearchResults;
