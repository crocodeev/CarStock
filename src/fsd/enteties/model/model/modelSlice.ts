import { TJsonBodyResponce } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TModel } from "./types";
import { baseUrl } from "@/shared/api/config";

export const modelApi = createApi({
    reducerPath: 'models',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getModelsByMark: builder.query<TJsonBodyResponce<TModel[]>, string>({
            query: (mark) => `models?mark=${mark}`
        }),
    }),
});

export const { useGetModelsByMarkQuery } = modelApi;