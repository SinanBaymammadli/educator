import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./CoursePreview.module.css";
import ThreeToTwoImg from "../ThreeToTwoImg/ThreeToTwoImg";

const CoursePreview = ({ imgUrl, title, author, price, id }) => (
  <Link className={style.CoursePreview} to={`/c/${id}`}>
    <ThreeToTwoImg
      imgUrl={imgUrl}
      wrapperClass={style.ImgWrapper}
      alt={title}
    />

    <div className={style.info}>
      <div className={style.price}>${price}</div>
      <div className={style.mainInfo}>
        <div className={style.title}>{title}</div>
        <div className={style.author}>Add by {author}</div>
      </div>
    </div>
  </Link>
);

CoursePreview.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default CoursePreview;
