import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { markApi } from "@/fsd/enteties/mark";
import { modelApi } from "@/fsd/enteties/model/model";
import { filterSlice } from "@/fsd/features/filter";
import { carApi } from "@/fsd/enteties/car/model/carSlice";
import { paginationSlice } from "@/fsd/features/pagination";

const rootReducer = combineReducers({
    [markApi.reducerPath]: markApi.reducer,
    [filterSlice.reducerPath]: filterSlice.reducer,
    [modelApi.reducerPath]: modelApi.reducer,
    [carApi.reducerPath]: carApi.reducer,
    [paginationSlice.reducerPath]: paginationSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(markApi.middleware)
    .concat(modelApi.middleware)
    .concat(carApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

