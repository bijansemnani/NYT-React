import React, { Component } from "react";
import API from "../../utils/API";
import "./Saved.css"

class Saved extends Component {

  state = {
    results: []
  };

  componentDidMount(){
    this.loadArticles()
  }

  loadArticles = () => {
    API.getArticles()
      .then(res => {
        console.log(res);
        this.setState({results:res.data})
      }
      ).catch(err => console.log(err));
  };

  handleDelete = (id) => {
    API.deleteArticles(id)
      .then(res => {
        console.log(res);
        let newArray = this.state.results.filter(element => {
          return element._id !== id;
        });
        this.setState({
          results: newArray
        })
      })
  }

  render () {
    return (
      <div>
        {this.state.results.map((element) => {
          return (
            <div key={element._id} className="row articleContainer">
              <div className="col s12">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title"><a target="_blank" href={element.url}>
                      {element.title}</a>
                    </span>
                  </div>
                  <div className="card-action">
                    <button className="saveArticles center-align" onClick={()=>this.handleDelete(element._id)}>Remove Article</button>
                  </div>
                </div>
              </div>
            </div>

          );
        })}
      </div>
      );
  }
}

export default Saved;
