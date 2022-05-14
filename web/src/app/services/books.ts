import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

// create interface for Book entity
export interface IBook {
  id: number;
  title: string;
  description: string;
  publicationDate: string;
  genre: string;
  cover: string;
  author: Author;
}

// create interface for Author entity
export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  bibliography: string;
  books: IBook[];
}

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL,
  prepareHeaders: (headers) => {
    headers.set('Accept', 'application/json');
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 });

export const bookApi = createApi({
  baseQuery: baseQueryWithRetry,
  reducerPath: 'books',
  tagTypes: ['Book', 'SearchBook'],
  endpoints: (build) => ({
    getBooks: build.query<IBook[], void>({
      query: () => '/books',
      // if something goes wrong, we want to retun an empty array
      // so that we can render the loading state
      transformResponse: (response: IBook[]) => response || [],
    }),
    getBookById: build.query<IBook, { id: number }>({
      query: ({ id }) => `books/${id}`,
    }),
    searchBooks: build.query<IBook[], { title: string }>({
      query: ({ title }) => `/books?title=${title}`,
      providesTags: ['SearchBook'],
    }),
  }),
});

export const { useGetBooksQuery, useGetBookByIdQuery, useSearchBooksQuery } =
  bookApi;
