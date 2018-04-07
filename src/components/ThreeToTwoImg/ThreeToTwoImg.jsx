import React from "react";
import style from "./ThreeToTwoImg.module.css";

const ThreeToTwoImg = ({ imgUrl, alt, wrapperClass, aspectClass }) => (
  <div className={`${style.ImgThreeToTwoWrapper} ${wrapperClass}`}>
    <div className={`${style.ImgAspectWrapper} ${aspectClass}`}>
      <img className={style.Img} src={imgUrl} alt={alt} />
    </div>
  </div>
);

export default ThreeToTwoImg;
