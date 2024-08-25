/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, SubmitHandler } from "react-hook-form";
import WrapNavbar from "@/components/banner/WrapNavbar";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useAddFoodMutation, useFindAllFoodQuery } from "@/redux/baseApi";
import { toast } from "@/components/ui/use-toast";
import { uploadImage } from "@/api";

type FormValues = {
  name: string;
  category: string;
  description: string;
  price: number;
  image: FileList;
};
const AddFood = () => {
  const [rating, setRating] = useState<number | null | string>(3);
  const [hover, setHover] = useState<null | any>(null);
  const [setAddFood, { data }] = useAddFoodMutation();
  const value = "default";
  const search = "";
  const { refetch } = useFindAllFoodQuery({ value, search });
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setLoading(true);
      const imageURL = await uploadImage(data?.image[0]);
      await setAddFood({
        name: data?.name,
        category: data?.category,
        details: data?.description,
        price: data?.price,
        rating: rating,
        imageURL: imageURL,
      });
      toast({
        title: "Food Added SUccessfully.",
      });
      reset();
      refetch();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  return (
    <div>
      <WrapNavbar imageURL="https://images.unsplash.com/photo-1568581789190-ae90a7da930b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

      <div>
        <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Add Food</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Write food name"
                {...register("name", { required: "Name is required" })}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                {...register("category", { required: "Category is required" })}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.category ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value="">Select a category</option>
                <option value="Pizza">Pizza</option>
                <option value="Chicken">Chicken</option>
                <option value="Fast Food">Fast Food</option>
                <option value="Burgers">Burgers</option>
                <option value="Salads">Salads</option>
                <option value="Seafood">Seafood</option>
                <option value="Pasta">Pasta</option>
                <option value="Desserts">Desserts</option>
                <option value="Beverages">Beverages</option>
                <option value="Sushi">Sushi</option>
              </select>
              {errors.category && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.category.message}
                </p>
              )}
              <p className="mt-1 text-sm text-gray-500">
                Choose a category to explore a variety of delicious options
                tailored to your taste. Whether you're in the mood for a cheesy
                pizza, crispy chicken, fresh salads, or a sweet dessert, we've
                got something to satisfy every craving.
              </p>
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                placeholder="Write Description..."
                {...register("description", {
                  required: "Description is required",
                })}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.description ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              ></textarea>
              {errors.description && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.description.message}
                </p>
              )}
              <p className="mt-1 text-sm text-gray-500">
                Describe the dish, focusing on its key ingredients and flavors.
              </p>
            </div>

            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                placeholder="Write price"
                {...register("price", { required: "Price is required" })}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.price ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              />
              {errors.price && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.price.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image
              </label>
              <input
                type="file"
                id="image"
                {...register("image", { required: "Image is required" })}
                className={`mt-2 block w-full px-3 py-2 border ${
                  errors.image ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              />
              {errors.image && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.image.message}
                </p>
              )}
            </div>

            <div className="flex items-center gap-1 mt-3 my-8 justify-center">
              {Array.from({ length: 5 }).map((_, index) => {
                const currentRating = index + 1;
                return (
                  <label key={index}>
                    <input
                      style={{ display: "none" }}
                      type="radio"
                      name="rating"
                      value={currentRating}
                      onClick={() => setRating(currentRating)}
                    />
                    <FaStar
                      className="cursor-pointer"
                      size={50}
                      color={
                        currentRating <= (hover || rating)
                          ? "#ffc107"
                          : "#e4e5e9"
                      }
                      onMouseEnter={() => setHover(currentRating)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>

            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-blue-300 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {loading ? "Loading..." : "Save Food"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
