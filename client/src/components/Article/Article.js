import React, { Component } from "react";
import { Input, FormBtn } from "../Form";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./Article.css";
import Results from "../Results"

class Article extends Component {

  state = {
    query: "",
    begin: "",
    end: "",
    results: []
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.query) {
      API.searchArticles(this.state.query, this.state.begin, this.state.end)
        .then(res => {
          console.log(res.data.response.docs);
          this.setState({
            query: "",
            begin: "",
            end: "",
            results: res.data.response.docs
          });
        })
        .catch(err => {
          this.setState({
            query: "",
            begin: "",
            end: ""
          });
          console.log(err)});
    }
  };

  handleSave = index => {
    var obj = {
      title: this.state.results[index].headline.main,
      date: this.state.results[index].pub_date,
      url: this.state.results[index].web_url
    }
    console.log(obj);
    API.saveArticle(obj).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <div className="container">
        <div id="searchRow" className="row">
          <div className="col s12">
            <form>
              <Input
                value={this.state.query}
                onChange={this.handleInputChange}
                name="query"
                placeholder="Search (required)"
              />
              <Input
                value={this.state.begin}
                onChange={this.handleInputChange}
                name="begin"
                placeholder="begin Year (optional)"
              />
              <Input
                value={this.state.end}
                onChange={this.handleInputChange}
                name="end"
                placeholder="End Year (optional)"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
            <Link to="/saved">Saved Articles</Link>

          </div>
        </div>
            {this.state.results.map((element, index) => {
              return (
                <Results key={index}
                  href={element.web_url}
                  headline={element.headline.main}
                  onClick={()=>this.handleSave(index)}
                />
              );
            })}
      </div>

    );
  }
}

export default Article;
