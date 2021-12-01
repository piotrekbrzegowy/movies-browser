import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
    name: "movieList",
    initialState: {
        movieList: [],
        loading: true,
        error: false,
    },
    reducers: {
        fetchMovieList: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchMovieListSuccess: (state, { payload: movieList }) => {
            state.movieList = movieList.results;
            state.loading = false;
            state.error = false;
        },
        fetchMovieListError: (state) => {
            state.loading = false;
            state.error = true;
        },

    },
});

export const {
    fetchMovieList,
    fetchMovieListSuccess,
    fetchMovieListError,
} = movieListSlice.actions;

export const selectMovieList = (state) => state.movieList.movieList;
export const selectError = (state) => state.movieList.error;
export const selectLoading = (state) => state.movieList.loading;
export const selectMoviesByQuery = (state, query) => {
    const movieList = selectMovieList(state);
if (!query || query.trim() === "") {
    return movieList;
}
    return movieList.filter(({title}) => 
        title.toUpperCase().includes(query.trim().toUpperCase()));
}

export default movieListSlice.reducer;