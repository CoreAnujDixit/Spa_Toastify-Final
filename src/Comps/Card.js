import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function ClickHandler() {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning('Liked Removed');
    } else {
      // Previously not liked
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success('Liked Added');
    }
  }

  return (
    <div className="w-80 rounded-md overflow-hidden bg-gray-500 mt-7 text-white">
      <div className="relative">
        <img src={course.image.url} alt="Course illustration" />

        <div className="bottom-24">
          <button className="bg-white p-2 rounded-full w-11 left-3/4 bottom-4 absolute" onClick={ClickHandler}>
            {
              likedCourses.includes(course.id) ?
                (<FcLike fontSize='1.75rem' />)

                :
                (<FcLikePlaceholder fontSize="1.75rem" />)
            }
          </button>
        </div>
      </div>

      <div>
        <p className="text-lg font-bold ml-2">{course.title}</p>
        <p className="text-base ml-2 pb-4 pr-2">
          {
            course.description.length > 100 ? (course.description.substr(0, 100)) + ('......') : (course.description)
          }
        </p>
      </div>
    </div>
  );
};

export default Card;
