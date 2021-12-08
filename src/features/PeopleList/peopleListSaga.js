import { apiConnect } from "../../common/apiConnect";
import { apiLink, apiKey, language } from "../../common/apiConfiguration";
import { fetchPeopleList, fetchPeopleListSuccess, fetchPeopleListError } from "./peopleListSlice";
import { call, delay, put, takeLatest } from "@redux-saga/core/effects";

function* fetchPeopleListHandler({ payload: { page, query } }) {
    const path = query
        ? `${apiLink}search/person${apiKey}${language}&query=${query}&page=${page}`
        : `${apiLink}person/popular${apiKey}${language}&page=${page}`
    ;

    try {
        delay(2000);
        const peopleList = yield call(apiConnect, path);
        yield put(fetchPeopleListSuccess(peopleList));
    } catch (error) {
        yield put(fetchPeopleListError());
    };
};

export function* watchFetchPeopleList() {
    yield takeLatest(fetchPeopleList.type, fetchPeopleListHandler);
};