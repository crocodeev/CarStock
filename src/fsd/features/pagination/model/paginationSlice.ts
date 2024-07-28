import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { TPagination } from "./types";

const initialState: TPagination = {
    currentPage: 1,
    itemsPerPage: 10
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<TPagination['currentPage']>) => {

            state.currentPage = action.payload;
        },
        setItemsPerPage: (state, action: PayloadAction<TPagination['itemsPerPage']>) => {

            state.itemsPerPage = action.payload;
        }
    }
})

export const  { setCurrentPage, setItemsPerPage } = paginationSlice.actions;