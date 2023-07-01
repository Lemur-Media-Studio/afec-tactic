import React from "react";
import { useState } from "react";

function StarRating({sendAnswer}){

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (

      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              id="star-rating"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={(e) => {setRating(index); sendAnswer(index===1?"Muy mala":index===2?"Mala":index===3?"Buena":index===4?"Muy buena":"Excelente")}}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };

export default StarRating;