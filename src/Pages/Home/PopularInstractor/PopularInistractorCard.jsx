import React from "react";

const PopularInistractorCard = ({ instructor }) => {
  const { instructorName, email, image } = instructor;
  return (
    <div className="text-center">
      <div className="w-[99%] mx-auto h-[16rem] mb-4 ">
        <img
          src={image}
          alt={instructorName}
          className="w-full h-[16rem] rounded-md"
        />
      </div>
      <h3 className="text-2xl font-bold">{instructorName}</h3>
      <p className="text-sm  mb-2">Email: {email}</p>
    </div>
  );
};

export default PopularInistractorCard;
