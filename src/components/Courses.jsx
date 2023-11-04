import React from "react";
import { getCoursesInfo } from "../utils/api";
import { useEffect, useState } from "react";

export default function Courses() {
  const [courses, setCourses] = useState(getCoursesInfo());

  return (
    <>
      <div>Courses</div>
      <div className="courses-container">
        {Object.keys(courses).map((key) => {
          const course = courses[key];
          return (
            <div className="course-container">
              <div key={course.name} className="course">
                {course.name}
              </div>
              {/* <div key={course.credits}>{course.credits}</div> */}
              {/* <div key={courses[key]}>{courses[key]}</div> */}
            </div>
          );
        })}
      </div>
    </>
  );
}
