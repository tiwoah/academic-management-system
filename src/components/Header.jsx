import React from "react";
import yorklogo from "../assets/yorklogo.png";
import { Link } from "react-router-dom";

export default function Header({ loggedIn, setLoggedIn, permissionLevel }) {
  return (
    <div>
      <div className="header">
        <img src={yorklogo} className="logo"></img>
        <div className="system-name">york univeristy</div>
        {loggedIn && (
          <div className="user-permission">
            permission level: {permissionLevel}
          </div>
        )}
        <button
          className="logout"
          onClick={(e) => {
            setLoggedIn(false);
          }}
        >
          logout
        </button>
      </div>
      <ul>
        <li>
          <Link to="/">
            <div className="active">CURRENT STATUS</div>
          </Link>
        </li>
        <li>
          <a href="#programs">PROGRAMS</a>
        </li>
        <li>
          <Link to="/courses">
            <div>COURSES</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
