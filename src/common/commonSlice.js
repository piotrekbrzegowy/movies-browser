import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
    name: "common",
    initialState: {
        genresList: [],
        loading: true,
        error: false,
    },
    reducers: {
        fetchCommon: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchCommonSuccess: (state, { payload: genresList }) => {
            state.genresList = genresList.genres;
            state.loading = false;
            state.error = false;
        },
        fetchCommonError: (state) => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const {
    fetchCommon,
    fetchCommonSuccess,
    fetchCommonError,
} = commonSlice.actions;

export const selectGenres = (state) => state.common.genresList;
export const selectError = (state) => state.common.error;
export const selectLoading = (state) => state.common.loading;

export default commonSlice.reducer;