import { baseUrl } from "@/shared/api/config";
import { TMark } from "./types";
import { TJsonBodyResponce } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const markApi = createApi({
    reducerPath: 'marks',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getAllMarks: builder.query<TJsonBodyResponce<TMark[]>, void>({
            query: () => 'marks'
        }),
    }),
});

export const { useGetAllMarksQuery } = markApi;

export const  useGetAllMarksResult = markApi.endpoints.getAllMarks.useQueryState;