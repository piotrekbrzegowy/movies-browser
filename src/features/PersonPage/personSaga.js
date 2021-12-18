import { call, delay, put, takeLatest } from "redux-saga/effects";
import { apiConnect } from "../../common/apiConnect";
import { apiLink, apiKey, language } from "../../common/apiConfiguration";
import { fetchPerson, fetchPersonCreditsSuccess, fetchPersonError, fetchPersonSuccess } from "./personSlice";

function* PersonHandler({ payload: { id } }) {
  const path = `${apiLink}person/${id}${apiKey}${language}`;
  const pathCredits = `${apiLink}person/${id}/movie_credits${apiKey}${language}`;

  try {
    yield delay(1000);
    const person = yield call(apiConnect, path);
    const personCredits = yield call(apiConnect, pathCredits);

    yield put(fetchPersonSuccess(person));
    yield put(fetchPersonCreditsSuccess(personCredits));
  } catch (error) {
    yield put(fetchPersonError());
  };
};

export function* watchFetchPersonDetails() {
  yield takeLatest(fetchPerson.type, PersonHandler);
};
