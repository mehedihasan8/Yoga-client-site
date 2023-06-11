const PopularInstractorsCard = ({ instructor }) => {
  const { instructorName, email, image } = instructor;
  return (
    <div className="text-center mb-4">
      <div className="w-[99%] mx-auto h-[20rem] mb-4 ">
        <img
          src={image}
          alt={instructorName}
          className="w-full h-[20rem] rounded-md"
        />
      </div>
      <h3 className="text-2xl font-bold my-2">{instructorName}</h3>
      <p className="text-sm  mb-2">Email: {email}</p>
    </div>
  );
};

export default PopularInstractorsCard;
