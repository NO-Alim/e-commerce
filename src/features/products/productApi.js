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
      //http://localhost:9000/products?name_like=women&productType_like=bag&_page=1&_limit=2
      //`/messages?conversationId=${id}&_sort=timestamp&_order=desc&_page=${page}&_limit=${process.env.REACT_APP_MESSAGES_PER_PAGE}`,
      query: ({
        page = 1,
        name = '',
        category = '',
        onSale = undefined,
        offer = undefined,
      }) =>
        `/products?name_like=${name}&productType_like=${category}${
          //if onSale have boolean value
          onSale === undefined ? '' : `&onSale=${onSale}`
        }&_page=${page}&_limit=8`,

      transformResponse(apiResponse, meta) {
        const totalCount = meta.response.headers.get('X-Total-Count');
        return {
          data: apiResponse,
          totalCount,
        };
      },
    }),
    getProduct: builder.query({
      query: (productId) => `/products/${productId}`,
    }),
    getRelatedProducts: builder.query({
      query: ({ tags }) => {
        const splitedTags = tags.split(',');
        const likes = splitedTags.map((tag) => `productType_like=${tag}`);
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
