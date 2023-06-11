import images from "../../../assets/image/services.jpg";

const Experience = () => {
  return (
    <div className="mt-16 mb-0">
      <h1 className="text-4xl font-bold text-center text-[#6144FF]">
        Experience of Yoga
      </h1>
      <div className="mt-10 lg:mb-24 lg:mt-24 grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="px-4 lg:px-0">
          <div className=" text-center lg:text-right mt-6">
            <h1 className="text-2xl font-semibold ">Balance Body & Mind</h1>
            <p className="leading-6 mt-2">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia
            </p>
          </div>
          <div className=" text-center lg:text-right mt-10">
            <h1 className="text-2xl font-semibold ">Healthy Daily Life</h1>
            <p className="leading-6 mt-2">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia
            </p>
          </div>
          <div className=" text-center lg:text-right mt-10">
            <h1 className="text-2xl font-semibold ">
              Improves your flexibility
            </h1>
            <p className="leading-6 mt-2 ">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia
            </p>
          </div>
          <div className=" text-center lg:text-right mt-10">
            <h1 className="text-2xl font-semibold ">Protects your spine</h1>
            <p className="leading-6 mt-2">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia
            </p>
          </div>
        </div>
        <div>
          <img src={images} alt="" />
        </div>
        <div className="px-4 lg:px-0">
          <div className=" text-center lg:text-left mt-6">
            <h1 className="text-2xl font-semibold ">
              Betters your bone health
            </h1>
            <p className="leading-6 mt-2">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia
            </p>
          </div>
          <div className=" text-center lg:text-left mt-10">
            <h1 className="text-2xl font-semibold ">
              Increases your blood flow
            </h1>
            <p className="leading-6 mt-2">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia
            </p>
          </div>
          <div className=" text-center lg:text-left mt-10">
            <h1 className="text-2xl font-semibold ">Keep a practice journal</h1>
            <p className="leading-6 mt-2 ">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia
            </p>
          </div>
          <div className=" text-center lg:text-left mt-10">
            <h1 className="text-2xl font-semibold ">Builds muscle strength</h1>
            <p className="leading-6 mt-2">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
