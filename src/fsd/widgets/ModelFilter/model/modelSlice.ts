import { createSlice } from "@reduxjs/toolkit";
import { TFilter } from "./type";

const initialState: TFilter = [];

export const filterSlice = createSlice({
    name: 'MODE',
    initialState,
    reducers: {},
}
)