/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import { LucideShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IoClose } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
  useCurrentUserQuery,
  useDeleteCardDataMutation,
  useFindOrderQuery,
  useOrderCreateMutation,
  useUserCartDataQuery,
} from "@/redux/baseApi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState("bg-[#5eaaf500]");
  const [text, setText] = useState("text-white");
  const { data: cartData, refetch: cartRefetch } = useUserCartDataQuery();
  const [setCardDataDelete] = useDeleteCardDataMutation();
  const [setOrder, { isLoading }] = useOrderCreateMutation();
  const { refetch } = useFindOrderQuery();
  const { data: user } = useCurrentUserQuery();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setNavBackground("bg-white");
        setText("text-gray-500");
      } else {
        setNavBackground("bg-[#5eaaf500]");
        setText("text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleRemoveProduct = async (id: number) => {
    try {
      await setCardDataDelete({ foodId: id }).unwrap();
      toast({
        title: `Delete ${id}`,
      });
      cartRefetch();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateOrder = async () => {
    try {
      const totalPrice = cartData?.payload?.reduce(
        (a: number, c: any) => a + Number(c?.price),
        0
      );
      console.log({ totalPrice });
      await setOrder({
        cartProduct: cartData?.payload,
        price: totalPrice,
      }).unwrap();
      toast({
        title: "Sent Order successfully",
      });
      cartRefetch();
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav
      className={`${navBackground} fixed  w-full p-3  border-b border-gray-300 z-50 transition duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center gap-2">
            <div className="relative">
              <svg
                id="logo-88"
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="ccustom"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.7146 0.516113C11.4582 0.516113 9.2943 1.41245 7.69881 3.00794L0 10.7067V14.2307C0 16.7204 1.06944 18.9603 2.77401 20.5161C1.06944 22.0719 0 24.3118 0 26.8015V30.3255L7.69881 38.0243C9.2943 39.6198 11.4582 40.5161 13.7146 40.5161C16.2043 40.5161 18.4442 39.4467 20 37.7421C21.5558 39.4467 23.7957 40.5161 26.2854 40.5161C28.5418 40.5161 30.7057 39.6198 32.3012 38.0243L40 30.3255V26.8015C40 24.3118 38.9306 22.0719 37.226 20.5161C38.9306 18.9603 40 16.7204 40 14.2307V10.7067L32.3012 3.00794C30.7057 1.41245 28.5418 0.516113 26.2854 0.516113C23.7957 0.516113 21.5558 1.58555 20 3.29012C18.4442 1.58555 16.2043 0.516113 13.7146 0.516113ZM25.7588 20.5161C25.6629 20.4286 25.5688 20.3387 25.4766 20.2465L20 14.7699L14.5234 20.2465C14.4312 20.3387 14.3371 20.4286 14.2412 20.5161C14.3371 20.6036 14.4312 20.6935 14.5234 20.7857L20 26.2623L25.4766 20.7857C25.5688 20.6935 25.6629 20.6036 25.7588 20.5161ZM22.2222 30.3255L22.2222 32.0085C22.2222 34.2525 24.0414 36.0717 26.2854 36.0717C27.363 36.0717 28.3965 35.6436 29.1585 34.8816L35.5556 28.4845V26.8015C35.5556 24.5575 33.7364 22.7383 31.4924 22.7383C30.4148 22.7383 29.3813 23.1664 28.6193 23.9284L22.2222 30.3255ZM17.7778 30.3255L11.3807 23.9284C10.6187 23.1664 9.58524 22.7383 8.50762 22.7383C6.26359 22.7383 4.44444 24.5575 4.44444 26.8015V28.4845L10.8415 34.8816C11.6035 35.6436 12.637 36.0717 13.7146 36.0717C15.9586 36.0717 17.7778 34.2525 17.7778 32.0085V30.3255ZM17.7778 9.02373V10.7067L11.3807 17.1038C10.6187 17.8658 9.58524 18.2939 8.50762 18.2939C6.26359 18.2939 4.44444 16.4747 4.44444 14.2307V12.5477L10.8415 6.15063C11.6035 5.38864 12.637 4.96056 13.7146 4.96056C15.9586 4.96056 17.7778 6.7797 17.7778 9.02373ZM28.6193 17.1038L22.2222 10.7067L22.2222 9.02373C22.2222 6.7797 24.0414 4.96056 26.2854 4.96056C27.363 4.96056 28.3965 5.38864 29.1585 6.15063L35.5556 12.5477V14.2307C35.5556 16.4747 33.7364 18.2939 31.4924 18.2939C30.4148 18.2939 29.3813 17.8658 28.6193 17.1038Z"
                  fill="#FF630B"
                ></path>
              </svg>
            </div>
            <h1 className={`text-xl ${text} font-semibold`}>
              T-
              <span className="text-red-400 font-bold text-[28px]">E</span>
              stylav
            </h1>
          </div>
        </Link>
        <button
          className="text-gray-800 block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
        <div className="flex items-center gap-8">
          <div
            className={`md:flex md:items-center ${
              isOpen
                ? "block absolute bg-blue-400 w-full top-16 left-0 p-4"
                : "hidden"
            }`}
          >
            <Link to="/">
              <h1
                className={` block mt-4 md:inline-block md:mt-0 md:ml-4  transition duration-300 cursor-pointer font-bold ${text}`}
              >
                Home
              </h1>
            </Link>
            <Link to="/foods">
              <h1
                className={` block mt-4 md:inline-block md:mt-0 md:ml-4  transition duration-300 cursor-pointer font-bold ${text}`}
              >
                Foods
              </h1>
            </Link>
            {user?.payload?.role === "admin" && (
              <Link to="/add-food">
                <h1
                  className={` block mt-4 md:inline-block md:mt-0 md:ml-4  transition duration-300 cursor-pointer font-bold ${text}`}
                >
                  Add foods
                </h1>
              </Link>
            )}
            {user && (
              <Link to="/my-order">
                <h1
                  className={` block mt-4 md:inline-block md:mt-0 md:ml-4  transition duration-300 cursor-pointer font-bold ${text}`}
                >
                  My order
                </h1>
              </Link>
            )}
            <Link to="/services">
              <h1
                className={` block mt-4 md:inline-block md:mt-0 md:ml-4  transition duration-300 cursor-pointer font-bold ${text}`}
              >
                Services
              </h1>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <div className="">
                  <div
                    className={` block mt-4 md:inline-block md:mt-0 md:ml-4  transition duration-300 cursor-pointer font-bold relative ${text}`}
                  >
                    <LucideShoppingCart />
                    <h1 className="bg-red-400 text-white z-50 w-6 h-6 text-xs -top-3 rounded-full flex justify-center items-center absolute -right-3">
                      {cartData?.payload ? cartData?.payload?.length : 0}
                    </h1>
                  </div>
                </div>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col justify-between  h-[calc(100vh-40px)]">
                  <div>
                    <h1 className="text-lg font-semibold text-red-400">
                      Cart Products
                    </h1>
                    <div className="bg-gray-200 w-full h-[2px] mt-2"></div>
                    <div className="mt-4 space-y-2 ">
                      {cartData?.payload?.length === 0 ? (
                        <h1 className=" text-[15px] text-red-300 font-medium">
                          Empty
                        </h1>
                      ) : (
                        cartData?.payload?.map((product: any) => {
                          return (
                            <div
                              key={product?._id}
                              className="bg-red-100 p-1 rounded-sm relative"
                            >
                              <div className="flex gap-3">
                                <div className="w-16 h-16 rounded-full  bg-red-100">
                                  <img
                                    className="w-full h-full"
                                    src={product?.food?.imageURL}
                                    alt="product image"
                                  />
                                </div>
                                <div className="space-y-1">
                                  <h1 className="text-[15px] font-semibold text-gray-600">
                                    {product?.food?.name}
                                  </h1>
                                  <div className="flex items-center gap-2">
                                    <p className="text-sm font-semibold text-gray-600">
                                      {product?.quantity}item
                                    </p>
                                    <p>=</p>
                                    <p className="text-sm font-semibold text-gray-600">
                                      {product?.price} BDT
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="absolute  -right-1 -top-2"
                                onClick={() => handleRemoveProduct(product._id)}
                              >
                                <IoClose className="text-2xl text-white p-1 cursor-pointer bg-red-400 " />
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                  <div className="my-2">
                    <h1 className="text-lg font-semibold text-gray-600">
                      Total Price :{" "}
                      {cartData?.payload

                        .reduce((a: number, c: any) => a + Number(c?.price), 0)
                        .toFixed(2)}{" "}
                      BDT
                    </h1>
                    {cartData?.payload?.length === 0 ? (
                      <Button
                        className="w-full bg-gray-600 mt-2 cursor-not-allowed rounded-sm"
                        disabled
                      >
                        Order
                      </Button>
                    ) : (
                      <Button
                        onClick={handleCreateOrder}
                        className="w-full mt-2 cursor-pointer rounded-sm"
                      >
                        {isLoading ? "Loading..." : "Order"}
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="cursor-pointer">
            <DropDownMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
