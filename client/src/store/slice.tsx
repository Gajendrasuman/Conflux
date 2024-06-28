import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface CounterState{
    height?: string;
    width?: string;
    fontFamily?: string;
}


const initialState: CounterState = {
    height: "h-fit",
    width: "w-full",
    fontFamily: "font-sans"
};

export const nav = createSlice({
    name: "nav",
    initialState,
    reducers: {
        navHeight: (state, action: PayloadAction<string>) => {
            state.height = action.payload;
        },
        navWidth: (state, action: PayloadAction<string>) => {
            state.width = action.payload;
        },
        fontFamily: (state, action: PayloadAction<string>) => {
            state.fontFamily = action.payload;
        },

    },
});

export const { navHeight, navWidth } = nav.actions
export default nav.reducer;