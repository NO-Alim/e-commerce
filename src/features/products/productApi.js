import { apiSlice } from '../api/apiSlice';

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products?page=1&_limit=8',
      transformResponse(apiResponse, meta) {
        const totalCount = meta.response.headers.get('X-Total-Count');
        return {
          data: apiResponse,
          totalCount,
        };
      },
    }),
    getMoreProducts: builder.query({
      query: ({ page = 1 }) => `/products?page=${page}&_limit=8`,
    }),
    getProduct: builder.query({
      query: (productId) => `/products/${productId}`,
    }),
    getRelatedProducts: builder.query({
      query: ({ tags }) => {
        const splitedTags = tags.split(',');
        const likes = splitedTags.map((tag) => `tags_like=${tag}`);
        const queryString = `/products?${likes.join('&')}&_limit=4`;
        return queryString;
      },
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductsQuery,
  useGetMoreProductsQuery,
  useGetRelatedProductsQuery,
} = productApi;
