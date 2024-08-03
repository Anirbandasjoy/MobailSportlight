/* eslint-disable @typescript-eslint/no-explicit-any */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { useEffect, useRef, useState } from "react";

import { IoIosArrowForward, IoIosStarOutline } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";

import { FaDollarSign } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { BiPurchaseTag } from "react-icons/bi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link, ScrollRestoration } from "react-router-dom";
import SwiperNavButton from "./SwipperNavButton";
import { products } from "@/products";
import { TbLocationDiscount } from "react-icons/tb";

const MobailsCom = () => {
  const SlideRef = useRef<any | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => {
    SlideRef.current?.swiper.slidePrev();
  };

  const handleNext = () => {
    SlideRef.current?.swiper.slideNext();
  };

  useEffect(() => {
    const swiperInstance = SlideRef.current?.swiper;

    if (swiperInstance) {
      swiperInstance.on("slideChange", () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      });
    }
  }, []);

  return (
    <div className="mb-20 container mx-auto">
      <ScrollRestoration />
      <div className="mb-8 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer hover:underline">
          <Link
            to="/mobails"
            className="text-xl md:text-[20px] font-[500] text-gray-600"
          >
            View All
          </Link>
          <IoIosArrowForward className="text-[20px]" />
        </div>
        <SwiperNavButton
          onPrev={handlePrev}
          onNext={handleNext}
          isPrevDisabled={isBeginning}
          isNextDisabled={isEnd}
        />
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
        ref={SlideRef}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1040: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        {products?.map((product) => {
          const averageRating =
            product.reviews?.reduce((a, c) => a + c.rating, 0) /
              product.reviews?.length || 0;

          const discountAmount =
            (product.price * product.discountPercentage) / 100;
          const discountedPrice = product.price - discountAmount;

          return (
            <SwiperSlide key={product.id} className="rounded-sm">
              <div className="">
                <div className="w-full md:h-[20rem] h-[20rem] bg-blue-200 rounded-t-sm">
                  <img
                    className="w-full h-full"
                    src={product.thumbnail}
                    alt="thumbnail"
                  />
                </div>
              </div>
              <div className="pt-2 px-4 border-x border-b pb-2  border-gray-300">
                <div className="flex justify-between flex-wrap items-center">
                  <div>
                    <h1 className="font-semibold text-gray-600 text-xs sm:text-sm">
                      {product?.title?.slice(0, 10)}..
                    </h1>
                  </div>
                  <div className="flex items-end gap-1">
                    <IoIosStarOutline className="text-[24px] text-gray-600" />
                    <h1 className="font-semibold clear-start text-[16px] text-gray-600">
                      {averageRating.toFixed(1)}
                    </h1>
                  </div>
                </div>
                <div className="mt-3 flex justify-between flex-wrap items-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-2 cursor-pointer">
                          <IoBedOutline className="text-xl text-gray-600" />
                          <h1 className="text-sm font-semibold text-gray-600">
                            {product?.stock > 0 ? (
                              <span>{product?.stock} Stock</span>
                            ) : (
                              <span className="text-red-400 text-xs sm:text-sm">
                                Stock out
                              </span>
                            )}
                          </h1>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-400 text-white z-50">
                        <p>Stoke</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <TbLocationDiscount className="text-lg font-bold text-gray-600" />
                          <h1 className="text-sm font-semibold text-gray-600">
                            {product?.discountPercentage}%
                          </h1>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <TooltipContent className="bg-gray-400 text-white">
                          <p>Discount</p>
                        </TooltipContent>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-1 line-through cursor-pointer">
                          <FaDollarSign className="text-sm text-gray-600 " />
                          <h1 className="text-sm font-semibold text-gray-600">
                            {product?.price}
                          </h1>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <TooltipContent className="bg-gray-400 text-white">
                          <p>Price</p>
                        </TooltipContent>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="mt-5">
                  <div className="flex items-center flex-wrap justify-between">
                    <div className="flex items-center gap-1">
                      <FaDollarSign />
                      {discountedPrice.toFixed(2)}
                      <span>dollar</span>
                    </div>
                    <Link to={`/mobails/${product?.id}`}>
                      <Button
                        className="text-xs rounded-sm px-3 hover:text-gray-600 text-gray-200 py-1 bg-blue-500 hover:border hover:border-blue-500 space-x-1"
                        variant="outline"
                      >
                        <BiPurchaseTag />
                        <span>Explore</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MobailsCom;
