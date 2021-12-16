import { apiConnect } from "../../common/apiConnect";
import { apiLink, apiKey, language } from "../../common/apiConfiguration";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchPerson, fetchPersonCreditsSuccess, fetchPersonError, fetchPersonSuccess } from "./personSlice";

function* PersonHandler() {
  const path = `${apiLink}person/90633${apiKey}${language}`;
  const pathCredits = `${apiLink}person/90633/movie_credits${apiKey}${language}`;

  try {
    const [person, personCredits] = yield all([call(apiConnect, path), call(apiConnect, pathCredits)]);

    yield all([put(fetchPersonSuccess(person)), put(fetchPersonCreditsSuccess(personCredits))]);
  } catch (error) {
    yield put(fetchPersonError());
  }
}

export function* watchFetchPersonDetails() {
  yield takeLatest(fetchPerson.type, PersonHandler);
}

// function* PersonHandler({ payload: { id } }) {
//   const path = `${apiLink}person/${id}${apiKey}${language}`;

// const pathURL = `${apiLink}person/${id}/movie_credits${apiKey}${language}`;
