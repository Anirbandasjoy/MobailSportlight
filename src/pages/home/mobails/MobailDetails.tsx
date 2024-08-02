/* eslint-disable @typescript-eslint/no-explicit-any */
import Banner from "@/components/banner/Banner";
import Review from "@/components/review/Review";
import { products } from "@/products";
import { useEffect, useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { TbLocationDiscount } from "react-icons/tb";
import { ScrollRestoration, useParams } from "react-router-dom";

const MobailDetails = () => {
  const { mobailId } = useParams();
  const [singleProduct, setSingleProduct] = useState<any | null>(null);

  useEffect(() => {
    setSingleProduct(
      products?.find((product) => product?.id === Number(mobailId))
    );
  }, [mobailId]);

  const discountAmount = singleProduct
    ? (singleProduct.price * singleProduct.discountPercentage) / 100
    : 0;
  const discountedPrice = singleProduct
    ? singleProduct.price - discountAmount
    : 0;

  return (
    <div className="mb-10">
      <ScrollRestoration />
      <Banner
        imageURL={singleProduct?.thumbnail || ""}
        headingText={singleProduct?.title || "Product Details"}
        subheadingText={singleProduct?.description || ""}
      />
      <div className="container">
        <div className="flex gap-2 flex-col-reverse md:flex-row">
          <div className="flex-1 font-semibold text-gray-600">
            <div className="flex flex-col justify-between  md:h-[433px]">
              <div>
                <div className="flex  gap-2 items-center">
                  <h1 className="text-xl text-nowrap">
                    {singleProduct?.title}
                  </h1>
                  <div className="w-full h-[2px] bg-gray-300"></div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-2">
                <div className="h-24 cursor-pointer w-36 border-2 border-blue-200 flex justify-center items-center">
                  <div>
                    <h2 className="text-[16px] mb-1 text-center text-gray-600">
                      Stock
                    </h2>
                    <div className="flex  items-center gap-2 cursor-pointer">
                      <IoBedOutline className="text-xl text-gray-600" />
                      <h1 className="text-sm font-semibold text-gray-600">
                        {singleProduct?.stock > 0 ? (
                          <span>{singleProduct?.stock} pitch</span>
                        ) : (
                          <span className="text-red-400">Stock out</span>
                        )}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="h-24 cursor-pointer w-36 border-2 border-red-200 flex justify-center items-center">
                  <div className="flex items-center gap-1 cursor-pointer">
                    <TbLocationDiscount className="text-lg font-bold text-gray-600" />
                    <h1 className="text-sm font-semibold text-gray-600">
                      {singleProduct?.discountPercentage}%
                    </h1>
                  </div>
                </div>
                <div className="h-24 cursor-pointer w-36 border-2 border-green-200 flex justify-center items-center">
                  <div>
                    <h2 className="text-[16px] mb-1 text-center text-gray-600">
                      Price
                    </h2>
                    <div className="flex flex-col items-center  cursor-pointer">
                      <h1 className=" font-semibold text-xs text-gray-600 line-through">
                        {singleProduct?.price} USD
                      </h1>

                      <h1 className="text-sm font-semibold text-gray-600 ">
                        {discountedPrice.toFixed(2)} USD
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-blue-300 rounded-sm ">
            <img
              className="w-full h-[450px]"
              src={
                singleProduct?.thumbnail ||
                "https://plus.unsplash.com/premium_photo-1684164600683-6ecb6c9c0eb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={singleProduct?.title || "Product Image"}
            />
          </div>
        </div>

        <div className="mt-4">
          <div className="sm:text-[16px]  w-full  flex flex-col sm:flex-row gap-2 sm:gap-0 items-center mt-4 text-[13px] dark:text-gray-300 text-gray-500">
            <div className="flex-1">
              <h1 className="w-full whitespace-nowrap">
                All Comments {singleProduct?.reviews?.length}
              </h1>
            </div>
            <div className="w-full  h-[2px] ml-2 dark:h-[1px] dark:bg-gray-700 bg-gray-300"></div>
          </div>
          {singleProduct?.reviews?.map((review: any, i: any) => {
            return <Review key={i} review={review} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MobailDetails;
