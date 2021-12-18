import { call, delay, put, takeLatest } from "redux-saga/effects";
import { apiConnect } from "./apiConnect";
import { apiLink, apiKey, language } from "./apiConfiguration";
import { fetchCommon, fetchCommonSuccess, fetchCommonError } from "./commonSlice";

function* fetchCommonHandler() {
  const genrePath = `${apiLink}genre/movie/list${apiKey}${language}`;

  try {
    yield delay(1000);
    const genres = yield call(apiConnect, genrePath);
    yield put(fetchCommonSuccess(genres));
  } catch (error) {
    yield put(fetchCommonError());
  };
};

export function* watchFetchCommon() {
  yield takeLatest(fetchCommon.type, fetchCommonHandler);
};
