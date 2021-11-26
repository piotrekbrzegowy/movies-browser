import { apiConnect } from "../../common/apiConnect"
import { fetchMovieListError, SetMovieList, fetchMoviesListData } from "./movieListSlice";
import { call, put, takeLatest } from "redux-saga/effects";

function* fetchMovieListHandler() {
    try {
        const data = yield call(apiConnect);
        yield put(SetMovieList(data));
        yield console.log(data)
    } catch (error) {
        yield put(fetchMovieListError())
        console.log("nie działa")
    }
}

export function* watchFetchMovieList() {
    yield takeLatest(fetchMoviesListData.type, fetchMovieListHandler);
}