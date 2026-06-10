import { useState } from "react";

function EditStarRating({ rating, setRating, max = 5 }) {
    return (
        <div>
            {[...Array(max)].map((_, index) => {
                const starValue = index + 1;

                return (
                    <span
                        key={starValue}
                        onClick={() => setRating(starValue)}

                        style={{
                            cursor: "pointer",
                            fontSize: "30px",
                            color: starValue <= rating ? "gold" : "lightgray"
                        }}
                    >
                        ★
                    </span>
                );
            })}

            <span style={{ marginLeft: "10px" }}>
                {rating} / {max}
            </span>
        </div>

    );

}

export default EditStarRating;

