const InstractorCard = ({ instructor }) => {
  const { name, email, image } = instructor;

  // console.log(instructor);

  return (
    <div className="text-center mb-4 bg-white p-4 rounded-lg shadow-md">
      <div className="w-[99%] mx-auto h-[20rem] mb-4 ">
        <img src={image} alt={name} className="w-full rounded-lg h-[20rem] " />
      </div>
      <h3 className="text-2xl font-bold my-2">Name : {name}</h3>
      <p className="text-sm  mb-2">Email: {email}</p>
    </div>
  );
};

export default InstractorCard;
