const Banner = ({
  headingText,
  subheadingText,
  imageURL,
}: {
  headingText: string;
  subheadingText: string;
  imageURL: string;
}) => {
  return (
    <div>
      <div className="relative w-full h-[600px] ">
        <img
          src={imageURL}
          className="w-full h-full object-cover "
          alt={"banner"}
        />
        {/* <div className="w-full h-full  bg-gradient-to-b from-[#5eaaf590] absolute top-0"></div> */}
        <div className="w-full h-full bg-gradient-to-b  from-[#5eaaf5ab] to-[#ffffff] absolute top-0"></div>
        <div className="absolute w-full h-full flex justify-center items-center top-0">
          <div className="text-center space-y-2">
            <h1 className="text-6xl font-bold text-gray-700">{headingText}</h1>
            <p className="text-lg text-gray-600 max-w-[44rem] mx-auto">
              {subheadingText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

//
