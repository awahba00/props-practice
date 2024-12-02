import React from "react";
import "./Body.css";

function Body(props) {
  return (
    <div className="body">
      <p>{props.comment}</p>
    </div>
  );
}

export default Body;
