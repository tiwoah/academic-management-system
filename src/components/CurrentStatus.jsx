import React from "react";
import Login from "../components/Login";
import System from "../components/System";
export default function CurrentStatus({
  loggedIn,
  setLoggedIn,
  permissionLevel,
  setPermissionLevel,
}) {
  return (
    <div>
      {!loggedIn && (
        <Login
          setLoggedIn={setLoggedIn}
          setPermissionLevel={setPermissionLevel}
        ></Login>
      )}
      {loggedIn && <System permissionLevel={permissionLevel}></System>}
    </div>
  );
}
