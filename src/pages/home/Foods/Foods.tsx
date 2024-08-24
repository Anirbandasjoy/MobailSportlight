/* eslint-disable @typescript-eslint/no-explicit-any */
import Banner from "@/components/banner/Banner";
import { Button } from "@/components/ui/button";

import { BiPurchaseTag } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";

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
import {
  useAddtoCartFoodMutation,
  useCurrentUserQuery,
  useDeleteFoodMutation,
  useFindAllFoodQuery,
  useUserCartDataQuery,
} from "@/redux/baseApi";
import { IoClose, IoFilterOutline } from "react-icons/io5";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { numbers } from "@/helper/food";

const Foods = () => {
  const [sortOrder, setSortValue] = useState<string>("");
  const [serachText, setSerchText] = useState<string>("");
  const [productQuantities, setProductQuantities] = useState<{
    [key: string]: number;
  }>({});
  const { refetch: cartRefetch } = useUserCartDataQuery();
  const [setDelete] = useDeleteFoodMutation();
  const { data: user } = useCurrentUserQuery();

  const {
    data: foods,
    refetch,
    isLoading,
  } = useFindAllFoodQuery({
    value: sortOrder,
    search: serachText,
  });
  const [setAddToCartData] = useAddtoCartFoodMutation();

  const handleChange = (value: any) => {
    console.log(value);
    setSortValue(value);
    refetch();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchValue = formData.get("searchText")?.toString() || "";
    setSerchText(searchValue);
    refetch();
  };

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

  console.log({ productQuantities });

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
    <div className="mb-10">
      <ScrollRestoration />
      <Banner
        imageURL="https://images.unsplash.com/photo-1488523665057-a818cdf6f5e6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        headingText="See all Foods."
        subheadingText="Pleas explore my mobail website visite here and my website"
      />

      <div className="container">
        <div className="flex gap-1 items-center">
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
          <form className="flex items-center w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              name="searchText"
              id="search"
              // onChange={handleInputChange}
              placeholder="Please Serchear you choisse food"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600 focus:outline-none"
            >
              SEARCH
            </button>
          </form>
        </div>

        {foods?.payload?.length === 0 ? (
          <h1 className="text-red-500 text-xl text-center mt-5 w-full mx-auto">
            Not Found
          </h1>
        ) : (
          <div className="grid grid-cols-1 mt-4 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-5">
            {isLoading
              ? "Loading..."
              : foods?.payload?.map((product: any) => {
                  const quantity = productQuantities[product._id] || 1;
                  const totalPrice = Number(product.price) * Number(quantity);

                  return (
                    <SwiperSlide key={product?._id} className="rounded-sm">
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
                              className="text-2xl cursor-pointer absolute -top-2 right-0 bg-red-500 text-white p-1 rounded-sm"
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Foods;
