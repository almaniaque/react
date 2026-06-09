import { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function StarRating({ rating = 0, max = 5 }) {
    return (
        <div>
            {[...Array(max)].map((_, index) => {
                const starValue = index + 1;


                let star = "☆";

                if (rating >= starValue) {
                    star = "★";
                } else if (rating >= starValue - 0.5) {
                    star = "⯨";
                }

                return (
                    <span
                        key={starValue}
                        style={{
                            fontSize: "30px",
                            color: starValue <= Math.round(rating)
                                ? "gold"
                                : "lightgray"
                        }}
                    >
                        {star}
                    </span>
                );
            })}

            <span style={{ marginLeft: "10px" }}>
                {rating.toFixed(1)} / {max}
            </span>
        </div>
    );
}

export default StarRating;