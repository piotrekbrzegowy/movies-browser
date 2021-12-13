import { all } from "@redux-saga/core/effects";
import { watchFetchCommon } from "./common/commonSaga";
import { watchFetchElement } from "./features/elementSaga";
import { watchFetchMovieList } from "./features/MovieList/movieListSaga";
import { watchFetchPeopleList } from "./features/PeopleList/peopleListSaga";
import { watchFetchPersonDetails } from "./features/PersonPage/personSaga";

export default function* rootSaga() {

    yield all([
        watchFetchMovieList(),
        watchFetchCommon(),
        watchFetchPeopleList(),
        watchFetchPersonDetails(),
        watchFetchElement(),
    ]);
};

