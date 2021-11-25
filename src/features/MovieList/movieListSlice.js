import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
    name: "movieList",
    initialState: {
        movieList: [],
        loading: true,
    },
    reducers: {
        fetchMovieList: (state) => {
            state.loading = true;
        },
        fetchMovieListSuccess: (state, { payload: movieList }) => {
            state.movieList = movieList.results;
            state.loading = false;
        },
    },
});

export const {
    fetchMovieListSuccess,
    fetchMovieList
} = movieListSlice.actions;
export const selectMovieList = state => state.movieList.movieList;

export default movieListSlice.reducer;