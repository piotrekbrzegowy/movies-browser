import { apiConnect } from "../../common/apiConnect"
import { fetchMovieList, fetchMovieListSuccess, fetchMovieListError } from "./movieListSlice";
import { call, put, takeLatest, delay } from "redux-saga/effects";

function* fetchMovieListHandler() {
    const path = "https://api.themoviedb.org/3/movie/popular?api_key=54628f6d7df0fa35378bd39ea74a55d1&language=en-US&page=1";

    try {
        yield delay(200);
        const data = yield call(apiConnect, path);
        yield put(fetchMovieListSuccess(data));
    } catch (error) {
        yield put(fetchMovieListError())
    }
}

export function* watchFetchMovieList() {
    yield takeLatest(fetchMovieList.type, fetchMovieListHandler);
}