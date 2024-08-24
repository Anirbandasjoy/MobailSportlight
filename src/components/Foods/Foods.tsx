/* eslint-disable @typescript-eslint/no-explicit-any */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { useEffect, useRef, useState } from "react";

import { IoIosArrowForward, IoIosStarOutline } from "react-icons/io";

import { FaDollarSign } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { BiPurchaseTag } from "react-icons/bi";

import { Link, ScrollRestoration } from "react-router-dom";
import SwiperNavButton from "./SwipperNavButton";

import {
  useAddtoCartFoodMutation,
  useCurrentUserQuery,
  useDeleteFoodMutation,
  useFindAllFoodQuery,
  useUserCartDataQuery,
} from "@/redux/baseApi";
import { toast } from "../ui/use-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { numbers } from "@/helper/food";
import { IoClose } from "react-icons/io5";

const FoodsCom = () => {
  const SlideRef = useRef<any | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const value = "";
  const search = "";

  const {
    data: foods,
    isLoading,
    refetch,
  } = useFindAllFoodQuery({ value, search });
  const [productQuantities, setProductQuantities] = useState<{
    [key: string]: number;
  }>({});
  const { refetch: cartRefetch } = useUserCartDataQuery();
  const [setAddToCartData] = useAddtoCartFoodMutation();
  const [setDelete] = useDeleteFoodMutation();
  const { data: user } = useCurrentUserQuery();

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

  const handleAddToCart = async (id: string) => {
    try {
      const quantity = productQuantities[id] || 1;
      const product = foods?.payload?.find((item: any) => item._id === id);
      const price = product?.price || 0;
      const totalPrice = Number(price) * Number(quantity);
      await setAddToCartData({
        foodId: id,
        quantity,
        price: totalPrice,
      }).unwrap();
      toast({
        title: `Added successfully ${id}`,
      });
      cartRefetch();
    } catch (error) {
      console.log(error);
    }
  };

  const handleQChange = (foodId: string, value: any) => {
    setProductQuantities({
      ...productQuantities,
      [foodId]: value,
    });
  };

  const handleDeleteFood = async (id: string) => {
    try {
      await setDelete({ foodId: id }).unwrap();
      toast({
        title: "Delete this Food",
      });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

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
        {isLoading
          ? "Loading..."
          : foods?.payload?.map((product: any) => {
              const quantity = productQuantities[product._id] || 1;
              const totalPrice = Number(product.price) * Number(quantity);

              return (
                <SwiperSlide key={product.id} className="rounded-sm">
                  <div className="">
                    <div className="w-full relative md:h-[20rem] h-[20rem] bg-blue-200 rounded-t-sm">
                      <img
                        className="w-full h-full"
                        src={product.imageURL}
                        alt="thumbnail"
                      />
                      {user?.payload?.role === "admin" && (
                        <IoClose
                          onClick={() => handleDeleteFood(product?._id)}
                          className="text-2xl cursor-pointer absolute top-0 right-0 bg-red-500 text-white p-1 rounded-sm"
                        />
                      )}
                    </div>
                  </div>
                  <div className="pt-8 px-4 border-x border-b pb-2  border-gray-300">
                    <div className="flex justify-between flex-wrap items-center ">
                      <div className="relative">
                        <h1 className="font-semibold text-gray-600 text-xs sm:text-lg">
                          {product?.name?.slice(0, 10)}..
                        </h1>
                        <span className="bg-blue-400 text-xs text-nowrap text-white p-1 px-2 rounded-xl absolute -top-4 -right-14">
                          {product?.category}
                        </span>
                      </div>
                      <div className="flex items-end gap-1">
                        <IoIosStarOutline className="text-[24px] text-gray-600" />
                        <h1 className="font-semibold clear-start text-[16px] text-gray-600">
                          {product?.rating}.0
                        </h1>
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="mb-4 flex justify-between items-center">
                        <div>
                          <Select
                            onValueChange={(value) =>
                              handleQChange(product?._id, parseInt(value))
                            }
                          >
                            <SelectTrigger className="w-[80px] ">
                              <SelectValue
                                placeholder="qua.."
                                className="text-xs"
                              />
                            </SelectTrigger>
                            <SelectContent className="">
                              <SelectGroup className="focus-visible:ring-0">
                                {numbers?.map((n, index) => (
                                  <SelectItem
                                    value={n?.value?.toString()}
                                    key={index}
                                  >
                                    {n.number}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaDollarSign />
                          {totalPrice}
                          <span>BDT</span>
                        </div>
                      </div>
                      <div className="flex items-center flex-wrap justify-end gap-1">
                        <Link to={`/food/${product?._id}`}>
                          <Button
                            className="text-xs rounded-sm px-3 hover:text-gray-600 text-gray-200 py-1 bg-blue-500 hover:border hover:border-blue-500 space-x-1"
                            variant="outline"
                          >
                            <BiPurchaseTag />
                            <span>Explore</span>
                          </Button>
                        </Link>
                        <Button
                          onClick={() => handleAddToCart(product?._id)}
                          className="text-xs rounded-sm px-3 hover:text-gray-600 text-gray-200 py-1 bg-gray-800 hover:border hover:border-blue-500 space-x-1"
                          variant="outline"
                        >
                          <BiPurchaseTag />
                          <span>Add to cart</span>
                        </Button>
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

export default FoodsCom;
