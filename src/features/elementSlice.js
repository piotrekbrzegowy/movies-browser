import { createSlice } from "@reduxjs/toolkit";

const elementSlice = createSlice({
    name: "element",
    initialState: {
        elementData: [],
        loading: true,
        error: false,
    },
    reducers: {
        fetchElement: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchElementSuccess: (state, { payload: elementData }) => {
            state.elementData = elementData;
            state.loading = false;
            state.error = false;
        },
        fetchElementError: (state) => {
            state.loading = false;
            state.error = true;
        },
        resetState: (state) => {
            state.elementData = [];
            state.loading = true;
            state.error = false;
        },
    },
});

export const { fetchElement, fetchElementSuccess, fetchElementError, resetState } = elementSlice.actions;

export const selectElement = (state) => state.element.elementData;
export const selectError = (state) => state.element.error;
export const selectLoading = (state) => state.element.loading;

export default elementSlice.reducer;
