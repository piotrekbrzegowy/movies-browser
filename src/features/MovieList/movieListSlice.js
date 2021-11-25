import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
    name: "movieList",
    initialState: {
        movieList: [],
    },
    reducers: {
        fetchMovieListSuccess: (state, { payload: movieList }) => {
            state.movieList = movieList.results; 
        },
    },
});

export const { fetchMovieListSuccess } = movieListSlice.actions;
export const selectMovieList = state => state.movieList.movieList;
