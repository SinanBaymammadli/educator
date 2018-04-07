import React from "react";
import axios from "axios";
import NewCourseForm from "../../components/NewCourseForm/NewCourseForm";
import style from "./NewCourse.module.css";

const addNewCourse = data => {
  axios.post("/wp-json/wp/v2/courses", data).then(res => console.log(res));
};

const NewCourse = () => (
  <div>
    <div className={style.NewCourseFormWrapper}>
      <h1>Add new course</h1>
      <NewCourseForm onSubmit={addNewCourse} />
    </div>
  </div>
);

export default NewCourse;
