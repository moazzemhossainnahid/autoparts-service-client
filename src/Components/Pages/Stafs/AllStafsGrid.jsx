import React from "react";

const AllStafsGrid = ({ staf }) => {
  return (
    <div className="w-full mx-auto">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
          className="w-full object-cover h-80"
            src={staf?.image}
            alt="Staf"
          />
        </figure>
        <div className="card-body text-start">
          <h2 className="card-title">{staf?.name}</h2>
          <p><span className="font-bold">Age:</span> {staf?.age}</p>
          <p><span className="font-bold">Experience:</span> {staf?.experience}</p>
          <p><span className="font-bold">Work:</span> {staf?.work_name}</p>
        </div>
      </div>{" "}
    </div>
  );
};

export default AllStafsGrid;
