import React from "react";
import CardItem from "./cardItem.jsx";

const CardContainer = () => {
  return (
    <div className="container mt-5 justify-content text-center">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <CardItem />
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <CardItem />
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <CardItem />
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <CardItem />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
