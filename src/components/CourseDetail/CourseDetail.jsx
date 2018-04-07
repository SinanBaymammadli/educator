import React from "react";
import PropTypes from "prop-types";
import ThreeToTwoImg from "../ThreeToTwoImg/ThreeToTwoImg";
import Container from "../Container/Container";
import style from "./CourseDetail.module.css";

const CourseDetail = ({ title, description, price, author, imgUrls }) => (
  <div>
    <div className={style.ImgWrapper}>
      <ThreeToTwoImg
        key={imgUrls[0]}
        aspectClass={style.ImgAspect}
        imgUrl={imgUrls[0]}
        alt={title}
      />
    </div>
    <Container>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <p>{author.name}</p>
      <p>{author.id}</p>
    </Container>
  </div>
);

CourseDetail.propTypes = {
  title: PropTypes.string.isRequired
};

export default CourseDetail;
