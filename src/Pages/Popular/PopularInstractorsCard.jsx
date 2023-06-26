import { useState } from "react";

const PopularInstractorsCard = ({ instructor }) => {
  const { name, email, image } = instructor;

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className={` p-4 rounded-lg shadow-md relative mb-6`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-w-2 aspect-h-3 w-[99%] mx-auto h-[20rem]">
        <img
          src={image}
          alt={name}
          className={`object-cover w-full rounded-lg h-[20rem]  ${
            isHovered ? "opacity-50 rounded-lg" : "opacity-100 rounded-lg"
          }`}
        />
        {isHovered && (
          <div className="class-card-details absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-75 p-4">
            <h3 className="text-2xl mb-2 font-semibold">{name}</h3>
            <p className="text-sm mb-2">{email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularInstractorsCard;
