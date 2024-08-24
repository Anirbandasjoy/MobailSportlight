/* eslint-disable @typescript-eslint/no-explicit-any */
import Banner from "@/components/banner/Banner";
import { useFindSinglFoodQuery } from "@/redux/baseApi";

import { ScrollRestoration, useNavigate, useParams } from "react-router-dom";

const FoodDetails = () => {
  const navigate = useNavigate();
  const { foodId } = useParams();
  const { data: singleFood } = useFindSinglFoodQuery({ id: foodId });
  console.log(singleFood);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="mb-10">
      <ScrollRestoration />

      <Banner
        imageURL={singleFood?.payload?.imageURL || ""}
        headingText={singleFood?.name || "Product Details"}
        subheadingText={singleFood?.details || ""}
      />
      <div>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl p-4 gap-3 sm:flex-row flex-col  w-full flex">
            <div className="relative flex-1">
              <img
                src={singleFood?.payload?.imageURL}
                alt="Card"
                className="w-full rounded-md h-full"
              />
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                প্রহর কল্যাণ
              </div>
            </div>
            <div className="mt-4 flex-1">
              <div className="flex flex-col  h-full justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    dfdsfdsf...
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">Pizza</p>
                  <p className="text-xl font-bold text-blue-600 mt-4">
                    $ 45 BDT
                  </p>
                </div>
                <div className="mt-6">
                  <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 w-full">
                    Add to Cart
                  </button>
                  <button
                    onClick={handleBack}
                    className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-300 w-full mt-2"
                  >
                    back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
