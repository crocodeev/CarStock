import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { TFilter } from "./types";

const initialState: TFilter = {
    mark: undefined,
    model: []
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setMark: (state, action: PayloadAction<TFilter['mark']>) => {
      
            state.mark = action.payload;
        },
        setModel: (state, action: PayloadAction<TFilter['model']>) => {

            state.model = action.payload;
        }
    }
})

export const  { setMark, setModel } = filterSlice.actions;