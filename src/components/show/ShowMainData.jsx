import React from "react";
import IMG_placeholder from "./../../images/notFoundimg.jpg";

function ShowMainData({ image, name, rating, summary, tags }) {
  return (
    <>
      <div className="container-wrap d-flex-row">
        <div className="imag-show-single">
          <img
            src={image ? image.original : IMG_placeholder}
            alt="show-cover"
          />
        </div>
        <div className="cont-wrp">
          <h3>{name}</h3>
          <div className="start-line">
            <button type="button" className="active-star star-btn">
              <i className="fa fa-star" aria-hidden="true"></i>
            </button>
            <span>{rating.average || "N/A"}</span>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: summary }}
            className="all-summ"
          ></div>
          <div className="tag-line">
            Tags:{" "}
            <div className="tag-title">
              {tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowMainData;
