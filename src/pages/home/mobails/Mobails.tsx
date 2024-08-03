/* eslint-disable @typescript-eslint/no-explicit-any */
import Banner from "@/components/banner/Banner";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { products } from "@/products";
import { BiPurchaseTag } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import { IoBedOutline, IoFilterOutline } from "react-icons/io5";
import { TbLocationDiscount } from "react-icons/tb";
import { Link, ScrollRestoration } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Mobails = () => {
  const [allProduct, setAllProduct] = useState([...products]);

  const handleChange = (value: any) => {
    const sortedProducts = [...products];
    if (value === "lowtohigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === "hightolow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setAllProduct(sortedProducts);
    console.log(value);
  };

  return (
    <div className="mb-10">
      <ScrollRestoration />
      <Banner
        imageURL="https://media.istockphoto.com/id/1774613488/photo/business-people-portrait-of-a-beautiful-asian-chinese-female-in-yellow-cardigan-using-her.jpg?s=1024x1024&w=is&k=20&c=LHhSXLHe9vYLer1Fh2yo7-Yw1ebiIR07NL1Zutoo1zM="
        headingText="See all mobails."
        subheadingText="Pleas explore my mobail website visite here and my website"
      />
      <div className="container">
        <div className="mb-3 mt-1">
          <Select onValueChange={handleChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="FIlter product" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="flex gap-1 items-center">
                  <IoFilterOutline />
                  <h1>Filter</h1>
                </SelectLabel>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="lowtohigh">Low to hight</SelectItem>
                <SelectItem value="hightolow">High to low</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-5">
          {allProduct?.map((product) => {
            const averageRating =
              product.reviews?.reduce((a, c) => a + c.rating, 0) /
                product.reviews?.length || 0;

            const discountAmount =
              (product.price * product.discountPercentage) / 100;
            const discountedPrice = product.price - discountAmount;

            return (
              <SwiperSlide key={product.id} className="rounded-sm">
                <div className="">
                  <div className="w-full md:h-[16rem] h-[20rem] bg-blue-200 rounded-t-sm">
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
        </div>
      </div>
    </div>
  );
};

export default Mobails;
