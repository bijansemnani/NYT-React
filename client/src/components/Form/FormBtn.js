import React from "react";
import "../Article/Article.css";

export const FormBtn = props => (
  <button  {...props} style={{ float: "right", marginBottom: 10 }} className="btn submitButton">
    {props.children}
  </button>
);
