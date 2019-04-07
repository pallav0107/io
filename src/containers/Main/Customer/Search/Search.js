import React, { Component } from "react";
import SearchHeader from "./SearchHeader";
import SearchResults from "./SearchResults";
import { stringify } from "querystring";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultShow: false,
      value: ''
    };
  }
  componentWillMount() {
    this.props.onInit();
  }
  searchResult(flip, value) {
    if (flip) {
      this.setState({ resultShow: true, value: value });
    }
    return null;
  }
  render() {
    return (
      <div>
        <SearchHeader onSearchClick={this.props.onSearchClick} searchResult={this.searchResult.bind(this)} />
        <SearchResults customers={this.props.customers} />
      </div>
    );
  }
}

export default SearchPanel;
