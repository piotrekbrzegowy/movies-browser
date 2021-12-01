import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    movieList: [],
    loading: true,
    error: false,
    page: undefined,
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
      state.page = movieList.page;
    },
    fetchMovieListError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchMovieList, fetchMovieListSuccess, fetchMovieListError } = movieListSlice.actions;

export const selectMovieList = (state) => state.movieList.movieList;
export const selectError = (state) => state.movieList.error;
export const selectLoading = (state) => state.movieList.loading;
export const selectPage = (state) => state.movieList.page;

export default movieListSlice.reducer;
