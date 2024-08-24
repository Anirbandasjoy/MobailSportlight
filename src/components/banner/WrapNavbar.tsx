const WrapNavbar = ({ imageURL }: { imageURL: string }) => {
  return (
    <div>
      <div className="relative w-full h-[90px] ">
        <img
          src={imageURL}
          className="w-full h-full object-cover"
          alt="banner"
        />
        <div className="w-full h-full bg-gradient-to-b from-[#5eaaf5ab] to-[#ffffff] absolute top-0"></div>
        <div className="absolute w-full h-full flex justify-center items-center top-0"></div>
      </div>
    </div>
  );
};

export default WrapNavbar;
