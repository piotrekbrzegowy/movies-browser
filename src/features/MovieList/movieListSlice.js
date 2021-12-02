import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    movieList: [],
    loading: true,
    error: false,
    currentPage: undefined,
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
      state.currentPage = movieList.page;
      state.allPages = movieList.total_pages;
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
export const selectMoviesByQuery = (state, query) => {
    const movieList = selectMovieList(state);
if (!query || query.trim() === "") {
    return movieList;
}
    return movieList.filter(({title}) => 
        title.toUpperCase().includes(query.trim().toUpperCase()));
}
export const selectCurrentPage = (state) => state.movieList.currentPage;
export const selectAllPages = (state) => state.movieList.allPages;

export default movieListSlice.reducer;
