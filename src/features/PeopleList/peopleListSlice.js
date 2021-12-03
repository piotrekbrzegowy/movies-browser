import { createSlice } from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
    name: "peopleList",
    initialState: {
        peopleList: {},
        loading: true,
        error: false,
    },
    reducers: {
        fetchPeopleList: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchPeopleListSuccess: (state, { payload: genresList }) => {
            state.genresList = genresList.genres;
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

export const selectPeopleList = (state) => state.peopleList.peopleList;
export const selectError = state => state.peopleList.error;
export const selectLoading = state => state.peopleList.loading;

export default peopleListSlice.reducer;