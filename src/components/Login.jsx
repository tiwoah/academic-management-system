import React from "react";
import { useRef, useState, useEffect } from "react";
import { addUser, getUserDatabase } from "../utils/api";

export default function Login({ setLoggedIn, setPermissionLevel }) {
  const userIDRef = useRef(null);
  const passwordRef = useRef(null);
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");

  console.log("login component rerendered");

  // no time for real database
  // handle login on client like a chad
  const checkCredentials = () => {
    console.log("CHECKING CREDNETIALS");
    if (
      (userIDRef.current.value == "admin") &
      (passwordRef.current.value == "123")
    ) {
      console.log("USER IS ADMIN");
      setPermissionLevel("admin");
    } else {
      console.log("USER IS STUDENT");
    }
    setLoggedIn(true);

    addUser(1234567, "Jimmothy Chalamet", "accounting", [2011, 3110, 4400]);
    addUser(2345678, "Bob Smith", "arts", [6300, 6340, 6900]);
    addUser(3456789, "Charlie Brown", "biochemistry", [2021, 3010, 3140]);
    addUser(4567890, "David Lee", "biophysics", [2090, 4080, 4310]);
    addUser(5678901, "Eva Green", "criminology", [2650, 3654, 4667]);
    addUser(6789012, "Frank Miller", "softwareEngineering", [1100, 1028, 1800]);
    addUser(7890123, "Grace Davis", "accounting", [4000, 4600, 5200]);
    addUser(8901234, "Henry Ford", "biophysics", [2160, 3750, 4750]);
    addUser(9012345, "Irene White", "criminology", [2653, 3656, 4662]);
    addUser(9876543, "Jack Johnson", "softwareEngineering", [2011, 3221, 4314]);

    // console.log(getUserDatabase());
  };

  useEffect(() => {});

  return (
    <>
      <div className="">
        use "admin" and "123" for admin access, or anything else for student
        access
      </div>
      <div className="login-container">
        <div>Login</div>
        <input
          ref={userIDRef}
          className="username-input"
          type="text"
          id="username"
          name="username"
          required
          minLength="3"
          maxLength="16"
          size="8"
          placeholder="user id"
          spellCheck="false"
          pattern="^[a-zA-Z0-9]+$"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <input
          ref={passwordRef}
          className="password-input"
          type="text"
          id="password"
          name="password"
          required
          minLength="8"
          maxLength="16"
          size="8"
          placeholder="password"
          spellCheck="false"
          pattern="^[a-zA-Z0-9]+$"
          onChange={(e) => {}}
        />
        <button
          onClick={() => {
            //   setUserID(e.target.value);
            //   setPassword(e.target.value);
            checkCredentials();
          }}
        >
          Login
        </button>
      </div>
    </>
  );
}
