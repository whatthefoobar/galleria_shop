//instead of createSlice we have createApi for async requests from our backend
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

// fetchBaseQuery allows us to make req to our backend api
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

//the parent to our other redux slices
export const apiSlice = createApi({
  baseQuery,
  // tags for the kind of data we fetch from our api
  tagTypes: ["Product", "Order", "User"],
  endpoints: (builder) => ({}),
});
