import React from "react";

const Review = ({ review }) => {
  const { name, location, img, review: userReview } = review;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body gap-12">
          <p>{userReview}</p>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="">
              <h2 className="card-title">{name}</h2>
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
