import { createSlice } from "@reduxjs/toolkit";

const peopleListSlice = createSlice({
    name: "peopleList",
    initialState: {
        peopleList: [],
        loading: true,
        error: false,
        allPages: undefined,
        allPeople: "",
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
            state.allPages = peopleList.total_pages
        },
        fetchPeopleListError: (state) => {
            state.loading = false;
            state.error = true;
        },
        resetStatePeopleList: (state) => {
            state.peopleList = [];
            state.loading = true;
            state.error = false;
          },
    },
});

export const {
    fetchPeopleList,
    fetchPeopleListSuccess,
    fetchPeopleListError,
    resetStatePeopleList,
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
export const selectAllPeoplePage = (state) => state.peopleList.allPages;
export const selectAllPeople = (state) => state.peopleList.allPeople

export default peopleListSlice.reducer;