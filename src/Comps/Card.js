import React, { useState } from "react";
import { FcLike } from "react-icons/fc";


const Card = (props) => {

  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  function ClickHandler() {

  }
  return (
    <div className="w-80 rounded-md overflow-hidden bg-gray-500 mt-7 text-white">
      <div className="relative">
        <img src={course.image.url} alt="Course illustration" />

        <div className="bottom-24">
          <button className="bg-white p-2 rounded-full w-10 left-3/4 bottom-4 absolute" onClick={ClickHandler}>
            <FcLike className="text-2xl" /> {/* Increase the size using "text-4xl" class */}
          </button>
        </div>
      </div>

      <div>
        <p className="text-lg font-bold ml-2">{course.title}</p>
        <p className="text-base ml-2 pb-4 pr-2">{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
