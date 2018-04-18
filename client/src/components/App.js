import React, { Component } from "react";
import { Input, FormBtn } from "./Form";
import API from "../utils/API";

class App extends Component {

  state = {
    query: "",
    begin: "",
    end: ""
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.query) {
      API.searchArticles(this.state.query, this.state.begin, this.state.end)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <form>
        <Input
          value={this.state.query}
          onChange={this.handleInputChange}
          name="query"
          placeholder="Search (required)"
        />
        <Input
          value={this.state.author}
          onChange={this.handleInputChange}
          name="begin"
          placeholder="begin Year (optional)"
        />
        <Input
          value={this.state.author}
          onChange={this.handleInputChange}
          name="end "
          placeholder="End Year (optional)"
        />
        <FormBtn
          onClick={this.handleFormSubmit}
        >
          Submit Book
        </FormBtn>
      </form>
    );
  }
}

export default App;
