import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../types/post';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], void>({
      query: () => 'posts',
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
