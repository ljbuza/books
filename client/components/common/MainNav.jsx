import _ from "lodash";
import React, { Component } from "react";
import { Link, IndexLink } from "react-router";
import { Search, Input, Segment, Menu, Item } from "semantic-ui-react";
import { searchBooks } from "../api";
import { resultRenderer } from "./ResultRenderer";

export default class MainNav extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: "Home",
      isLoading: false,
      results: [],
      value: ""
    };
    // this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleItemClick = (evt, { name }) => {
    // evt.preventDefault();
    // history.pushState(null, '', this.props.to);
    history.pushState(null, "", evt.currentTarget.href);
    this.setState({ activeItem: name });
  };

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });
  // this.handleItemClick = this.handleItemClick.bind(this)

  handleResultSelect = () => this.setState({ value: books.title });

  handleSearchChange = (e, value) => {
    console.log(value);
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      // const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      // const isMatch = (result) => re.test(result.title);

      if (this.state.value.length > 2) {
        searchBooks(this.state.value).then(books =>
          this.setState({
            isLoading: false,
            // results:  _.filter(books, isMatch),
            results: books
          })
        );
      }
    }, 500);
  };

  render() {
    const { activeItem, isLoading, value, results } = this.state;
    return (
      <div>
        <Menu size="small" pointing>
          <Menu.Item
            name="Home"
            as={IndexLink}
            to="/"
            active={activeItem === "Home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Books"
            as={Link}
            to="/Books"
            active={activeItem === "Books"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="About"
            as={Link}
            to="/About"
            active={activeItem === "About"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Search
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={this.handleSearchChange}
                results={results}
                value={value}
                resultRenderer={resultRenderer}
                {...this.props}
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
