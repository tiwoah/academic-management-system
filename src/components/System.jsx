import React, { useRef, useState } from "react";
import { useEffect } from "react";
import {
  getUserFromID,
  getCoursesInfo,
  getUserDatabase,
  changeUserProgramFromId,
  changeUserCreditsFromId,
} from "../utils/api";

export default function System({ permissionLevel }) {
  function updateProgressBar() {
    const progressBar = document.getElementById("myProgressBar");

    // Generate a random number between 0 and 100
    const randomValue = Math.floor(Math.random() * 101);

    // Set the value attribute of the progress bar to the random value
    progressBar.value = randomValue;
  }

  const [allUserData, setAllUserData] = useState(getUserDatabase());
  const [data, setData] = useState(getUserFromID(1234567));
  const [currentUserID, setCurrentUserID] = useState(1234567);
  const [courses, setCourses] = useState(getCoursesInfo());
  const name = data.name;
  const program = data.program;
  const creditsEarned = data.creditsEarned;
  const creditsNeeded = data.creditsNeeded;

  const programRef = useRef(null);
  const creditsRef = useRef(null);

  return (
    <>
      {permissionLevel == "admin" && (
        <div className="system-navigation">
          <div className="system-navigation-title">Find Students</div>
          <div className="student-list">
            {Object.keys(allUserData).map((key) => {
              // const course = data.courses[key];
              // console.log(course, key);
              // console.log(courses["1011"]);
              return (
                <button
                  key={key}
                  className="student-list-button"
                  onClick={() => {
                    console.log(key);
                    setData(getUserFromID(key));
                    setCurrentUserID(key);
                  }}
                >
                  <div>{key}</div>
                  <div>{allUserData[key].name}</div>
                </button>
              );
            })}
          </div>
        </div>
      )}
      <div
        className={`system-container ${
          permissionLevel == "admin" ? "system-admin" : ""
        }`}
      >
        <div className="blocks">
          <div className="profile">
            <p>Name: {name}</p>
            <p>
              Program: {program}
              {permissionLevel == "admin" && (
                <>
                  <button
                    onClick={() => {
                      changeUserProgramFromId(
                        currentUserID,
                        programRef.current.value
                      );
                    }}
                  >
                    EDIT
                  </button>
                  <input
                    ref={programRef}
                    className="username-input"
                    type="text"
                    id="program"
                    name="program"
                    required
                    minLength="3"
                    maxLength="16"
                    size="8"
                    placeholder="program"
                    spellCheck="false"
                    pattern="^[a-zA-Z0-9]+$"
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                  />
                </>
              )}
            </p>
            <p>
              Credits earned/Total credits due: {creditsEarned}/{creditsNeeded}{" "}
              {permissionLevel == "admin" && (
                <>
                  <button
                    onClick={() => {
                      changeUserCreditsFromId(
                        currentUserID,
                        creditsRef.current.value
                      );
                    }}
                  >
                    EDIT
                  </button>
                  <input
                    ref={creditsRef}
                    className="username-input"
                    type="text"
                    id="program"
                    name="program"
                    required
                    minLength="3"
                    maxLength="16"
                    size="8"
                    placeholder="new credit #"
                    spellCheck="false"
                    pattern="^[a-zA-Z0-9]+$"
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                  />
                </>
              )}
            </p>
          </div>
        </div>

        <div>
          {Object.keys(data.courses).map((key) => {
            console.log(data.courses, key, data.courses[key]);
            return (
              <div key={key}>
                <div className="centreAligned">
                  <div className="progress">
                    <h1>{data.courses[key]}</h1>
                    <p />
                    <b>Status: Ongoing</b>
                    <p />
                    <progress
                      id="myProgressBar"
                      value={Math.floor(Math.random() * 101)}
                      max="100"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
