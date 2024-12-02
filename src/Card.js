import React from "react";
import Body from "./Body.js";
import Header from "./Header.js";
import "./Card.css";

function Card(props) {
  return (
    <div>
      <div className="card">
        <Header
          className="header"
          userName={props.commentObject.username}
          profileImg={props.commentObject.profileImg}
        />
        <Body className="body" comment={props.commentObject.comment} />
      </div>
    </div>
  );
}

export default Card;
