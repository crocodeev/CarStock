import { NextApiRequest } from "next";

export type TJsonBodyResponce<T> = {
    data?: T,
    error?: string
};

export interface ICustomRequest<T> extends NextApiRequest {

    nextUrl: {
        searchParams: URLSearchParams & T
    } 
};

export type TModel = string;
