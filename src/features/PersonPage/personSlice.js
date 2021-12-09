import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
  name: "personDetails",
  initialState: {
    person: [],
    status: "initial",
  },
  reducers: {
    fetchPerson: (state) => {
      state.status = "loading";
    },
    fetchPersonSuccess: (state, { payload: Person }) => {
      state.status = "success";
      state.person = Person;
    },
    fetchPersonCreditsSuccess: (state, { payload: PersonCredits }) => {
      state.status = "success";
      state.credits = PersonCredits;
    },
    fetchPersonError: (state) => {
      state.status = "error";
    },
  },
});
export const { fetchPerson, fetchPersonCreditsSuccess, fetchPersonError, fetchPersonSuccess } = personSlice.actions;

export const selectPersonState = (state) => state.personDetails;
export const selectPerson = (state) => selectPersonState(state).person;
export const selectPersonCredtis = (state) => selectPersonState(state).credits;
export const selectStatus = (state) => selectPersonState(state).status;

export default personSlice.reducer;
