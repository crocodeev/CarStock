import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { TFilter } from "./types";

const initialState: TFilter = {
    mark: undefined,
    model: undefined
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setMark: (state, action: PayloadAction<TFilter['mark']>) => {
            console.log(action.type);
            state.mark = action.payload;
        },
        setModel: (state, action: PayloadAction<TFilter['model']>) => {

            state.model = action.payload;
        }
    }
})

export const  { setMark, setModel } = filterSlice.actions;