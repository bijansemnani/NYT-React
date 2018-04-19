import React from "react";
import "./Results.css"

const Results = (props) => (

  <div className="row articleContainer">
      <div className="col s12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title"><a target="_blank" href={props.href}>
              {props.headline}</a>
            </span>
          </div>
          <div className="card-action">
            <button className="saveArticles center-align" onClick={props.onClick}>Save Article</button>
          </div>
        </div>
      </div>
    </div>


);

export default Results;
