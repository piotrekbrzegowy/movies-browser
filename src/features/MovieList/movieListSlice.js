import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    movieList: [],
    loading: true,
    error: false,
    allPages: undefined,
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
      state.allPages = movieList.page;
    },
    fetchMovieListError: (state) => {
      state.loading = false;
      state.error = true;
    },
    resetState: (state) => {
      state.movieList = [];
      state.loading = true;
      state.error = false;
    },
  },
});

export const { fetchMovieList, fetchMovieListSuccess, fetchMovieListError, resetState } = movieListSlice.actions;

export const selectMovieList = (state) => state.movieList.movieList;
export const selectError = (state) => state.movieList.error;
export const selectLoading = (state) => state.movieList.loading;

export const selectMoviesByQuery = (state, query) => {
  const movieList = selectMovieList(state);
  if (!query || query.trim() === "") {
    return movieList;
  }
  return movieList.filter(({ title }) => title.toUpperCase().includes(query.trim().toUpperCase()));
};

export const selectAllPages = (state) => state.movieList.allPages;

export default movieListSlice.reducer;
