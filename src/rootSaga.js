import { all } from "@redux-saga/core/effects";
import { watchFetchCommon } from "./common/commonSaga";
import { watchFetchMovieList } from "./features/MovieList/movieListSaga";

export default function* rootSaga() {
    yield all([
        watchFetchMovieList(),
        watchFetchCommon(),
    ]);
};