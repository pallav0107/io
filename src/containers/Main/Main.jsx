import React, { Component } from "react";
import SearchContainer from "./Customer/Search";
import { Button } from "@wdpui/react-gel";
import "./main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderSearch: false
    };
  }
  renderSearchPanel = () => {
    console.log("renderSearchPanel");
     if (!this.state.renderSearch) return null;
    return <SearchContainer />;
  };
  onSearchClick = () => {
    this.setState({
      renderSearch: true
    });

    // if (!this.state.renderSearch) return null;
    // return <SearchContainer />;
    // window.location.href = window.location.href + 'search';
  };
  onCreateClick = () => {  
    console.log("on create");
 
    window.location.href = window.location.href + 'create';
    //return (<Redirect from="/"  to="/create" />); 
    // return <CreateContainer></CreateContainer>;
  };
  render() {
    if (this.props.children) {
      return <div>{this.props.children}</div>;
    }
    return (
      <div className="pp">
        <div className="mb-3">
        <Button type="Button" size="large" styling="primary" label="Search Customer" onClick={this.onSearchClick}/>
 
        <Button type="Button" size="large" styling="primary" label="Create Customer" onClick={this.onCreateClick} />         
        </div>
        {this.renderSearchPanel()}
      </div>
    );
  }
}
 
export  default   Main;  
