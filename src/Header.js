import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="img">
        <img src={props.profileImg} alt="profile" />
      </div>
      <h1>{props.userName}</h1>
    </div>
  );
}

export default Header;
