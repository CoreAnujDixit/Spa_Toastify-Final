import React from "react";

const Filter = (props) => {
  let filterData = props.filterData;
  return (
    <div className="w-11/12 flex flex-wrap gap-4 justify-center font-bold ">
      {filterData.map((data) => (
        <button
          className="bg-black text-white text-lg rounded-md border-2 hover:border-green-400	 px-3 hover:bg-cyan-600 ..."
          key={data.id}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
