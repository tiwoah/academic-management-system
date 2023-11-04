import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CurrentStatus from "./components/CurrentStatus";
import Courses from "./components/Courses";
import { Route, Routes } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [permissionLevel, setPermissionLevel] = useState("student");

  return (
    <>
      <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        permissionLevel={permissionLevel}
      />

      <Routes>
        <Route
          path="/"
          element={
            <CurrentStatus
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              permissionLevel={permissionLevel}
              setPermissionLevel={setPermissionLevel}
            ></CurrentStatus>
          }
        ></Route>
        <Route path="/courses" element={<Courses />}></Route>
      </Routes>
    </>
  );
}

export default App;
