import { apiConnect } from "../../common/apiConnect";
import { apiLink, apiKey, language } from "../../common/apiConfiguration";
import { call, put, takeLatest, delay } from "redux-saga/effects";
import { fetchPerson, fetchPersonError, fetchPersonSuccess } from "./personSlice";

function* PersonHandler() {
  const path = `${apiLink}person/1922${apiKey}${language}`;
  try {
    yield delay(2000);
    const data = yield call(apiConnect, path);

    yield put(fetchPersonSuccess(data));
  } catch (error) {
    yield put(fetchPersonError());
  }
}

export function* watchFetchPersonDetails() {
  yield takeLatest(fetchPerson.type, PersonHandler);
}
