import { apiConnect } from "../../common/apiConnect";
import { apiLink, apiKey, language } from "../../common/apiConfiguration";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchPerson, fetchPersonError, fetchPersonSuccess } from "./personSlice";

function* PersonHandler({ payload: { id } }) {
  const path = `${apiLink}person/${id}${apiKey}${language}`;
  try {
    const data = yield call(apiConnect, path);

    yield put(fetchPersonSuccess(data));
  } catch (error) {
    yield put(fetchPersonError());
  }
}

export function* watchFetchPersonDetails() {
  yield takeLatest(fetchPerson.type, PersonHandler);
}
