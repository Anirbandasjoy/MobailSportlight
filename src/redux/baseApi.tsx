/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const testyTableApi = createApi({
  reducerPath: "testyTableApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3000/api/v1",
    baseUrl: "http://localhost:3000/api/v1",
    credentials: "include",
  }),

  endpoints: (builder) => ({
    // user api
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/login",
        method: "POST",
        body: { email, password },
      }),
    }),
    logOut: builder.mutation<any, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    processRegister: builder.mutation({
      query: (registerData) => ({
        url: "/user/process-registation",
        method: "POST",
        body: registerData,
      }),
    }),
    currentUser: builder.query<any, void>({
      query: () => "/user/current-user",
    }),
    singleUser: builder.query<any, any>({
      query: ({ userId }) => `/user/find-single-user/${userId}`,
    }),
    userRegistration: builder.mutation({
      query: (token) => ({
        url: "/user/registation-user",
        method: "POST",
        body: token,
      }),
    }),

    // food api
    addFood: builder.mutation({
      query: ({ name, category, details, price, rating, imageURL }) => ({
        url: "/food/create",
        method: "POST",
        body: { name, category, details, price, rating, imageURL },
      }),
    }),
    findAllFood: builder.query<any, any>({
      query: ({ value, search }) =>
        `/food/find?sortOrder=${value}&search=${search}`,
    }),
    findSinglFood: builder.query<any, any>({
      query: ({ id }) => `/food/find-single-food/${id}`,
    }),
    deleteFood: builder.mutation({
      query: ({ foodId }) => ({
        url: `/food/delete/${foodId}`,
        method: "DELETE",
      }),
    }),

    // cart
    addtoCartFood: builder.mutation({
      query: ({ foodId, quantity, price }) => ({
        url: "/cart/create",
        method: "POST",
        body: { foodId, quantity, price },
      }),
    }),
    userCartData: builder.query<any, void>({
      query: () => "/cart/user-cart-data",
    }),
    deleteCardData: builder.mutation({
      query: ({ foodId }) => ({
        url: `/cart/delete?foodId=${foodId}`,
        method: "DELETE",
      }),
    }),
    orderCreate: builder.mutation({
      query: ({ cartProduct, price }) => ({
        url: `/order/create`,
        method: "POST",
        body: { cartProduct, price },
      }),
    }),
    findOrder: builder.query<any, void>({
      query: () => "/order/find",
    }),
  }),
});

export const {
  useLoginMutation,
  useAddFoodMutation,
  useProcessRegisterMutation,
  useUserRegistrationMutation,
  useCurrentUserQuery,
  useLogOutMutation,
  useFindAllFoodQuery,
  useFindSinglFoodQuery,
  useAddtoCartFoodMutation,
  useUserCartDataQuery,
  useDeleteCardDataMutation,
  useOrderCreateMutation,
  useFindOrderQuery,
  useDeleteFoodMutation,
  useSingleUserQuery,
} = testyTableApi;

export default testyTableApi;
