import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
    name: "movieList",
    initialState: {
        movieList: {},
        loading: true,
        error: false,
    },
    reducers: {
        fetchMoviesListData: (state) => {
            state.error = false;
            state.loading = true;
        },

        SetMovieList: (state, { payload: movieList }) => {
            state.movieList = movieList; 
        },

        fetchMovieListError: (state) => {
            state.loading = false;
            state.error = true
        }
    },
});

export const { 
    fetchMoviesListData,
    SetMovieList,
    fetchMovieListError,
} = movieListSlice.actions;
export const selectMovieList = state => state.movieList;
export const selectLoading = state => selectMovieList(state).loading;
export const selectError = state => selectMovieList(state).error;

export default movieListSlice.reducer;