import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
  name: "personDetails",
  initialState: {
    person: [],
    loading: true,
    error: false,
  },
  reducers: {
    fetchPerson: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchPersonSuccess: (state, { payload: person }) => {
      state.loading = false;
      state.error = false;
      state.person = person;
    },

    fetchPersonError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});
export const { fetchPerson, fetchPersonSuccess, fetchPersonError } = personSlice.actions;

export const selectPersonState = (state) => state.personDetails;
export const selectPerson = (state) => selectPersonState(state).person;

export default personSlice.reducer;
