import { createSlice } from "@reduxjs/toolkit";

const elementSlice = createSlice({
    name: "element",
    initialState: {
        elementData: [],
        creditsData: [],
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
        fetchElementCreditsSuccess: (state, { payload: elementCreditsData }) => {
            state.creditsData = elementCreditsData;
            state.loading = false;
            state.error = false;
        },
        fetchElementError: (state) => {
            state.loading = false;
            state.error = true;
        },
        resetState: (state) => {
            state.elementData = [];
            state.creditsData = [];
            state.loading = true;
            state.error = false;
        },
    },
});

export const { fetchElement, fetchElementSuccess, fetchElementCreditsSuccess, fetchElementError, resetState } = elementSlice.actions;

export const selectElement = (state) => state.element.elementData;
export const selectElementCredits = (state) => state.element.creditsData;
export const selectError = (state) => state.element.error;
export const selectLoading = (state) => state.element.loading;

export default elementSlice.reducer;
