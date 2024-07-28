import { baseUrl } from "@/shared/api/config";
import { TCarModel, TCarsByMarkQuery } from "./types";
import { TJsonBodyResponce } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carApi = createApi({
    reducerPath: 'cars',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCarPaginated: builder.query<TJsonBodyResponce<TCarModel[]>, TCarsByMarkQuery>({
            query: (args) => {
                const { mark, limit, skip, model } = args;

                console.log(`cars?mark=${mark}&skip=${skip}&limit=${limit}&model=${model}`);
                

                return {
                    url: `cars?mark=${mark}&skip=${skip}&limit=${limit}&model=${model}`
                }
            }
        }),
    }),
});

export const { useGetCarPaginatedQuery } = carApi;