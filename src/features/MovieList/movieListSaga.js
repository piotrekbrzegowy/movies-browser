import { apiConnect } from "../../common/apiConnect";
import { apiLink, apiKey, language } from "../../common/apiConfiguration";
import { fetchMovieList, fetchMovieListSuccess, fetchMovieListError } from "./movieListSlice";
import { call, put, takeLatest, delay } from "redux-saga/effects";

function* fetchMovieListHandler({ payload: { page, query } }) {
  const path = query 
  ? `${apiLink}search/movie${apiKey}${language}&query=${query}&page=${page}`
  : `${apiLink}movie/popular${apiKey}${language}&page=${page}`;

  try {
    yield delay(1000);
    const data = yield call(apiConnect, path);

    yield put(fetchMovieListSuccess(data));
  } catch (error) {
    yield put(fetchMovieListError());
  };
};

export function* watchFetchMovieList() {
  yield takeLatest(fetchMovieList.type, fetchMovieListHandler);
};
