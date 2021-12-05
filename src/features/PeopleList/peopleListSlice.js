import { createSlice } from "@reduxjs/toolkit";
import { selectMovieList } from "../MovieList/movieListSlice";

const peopleListSlice = createSlice({
    name: "peopleList",
    initialState: {
        peopleList: [],
        loading: true,
        error: false,
    },
    reducers: {
        fetchPeopleList: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchPeopleListSuccess: (state, { payload: peopleList }) => {
            state.peopleList = peopleList.results;
            state.loading = false;
            state.error = false;
        },
        fetchPeopleListError: (state) => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const {
    fetchPeopleList,
    fetchPeopleListSuccess,
    fetchPeopleListError
} = peopleListSlice.actions;

export const selectPeopleList = state => state.peopleList.peopleList;
export const selectError = state => state.peopleList.error;
export const selectLoading = state => state.peopleList.loading;
export const selectPeoplesByQuery = (state, query) => {
    const peopleList = selectPeopleList(state);
    if (!query || query.trim() === "") {
        return peopleList;
    };
    return peopleList.filter(({ name }) => name.toUpperCase().includes(query.trim().toUpperCase()));
};

export default peopleListSlice.reducer;