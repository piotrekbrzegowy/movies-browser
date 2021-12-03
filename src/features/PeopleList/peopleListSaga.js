import { apiConnect } from "../../common/apiConnect";
import { apiLink, apiKey, language } from "../../common/apiConfiguration";
import { fetchPeopleList, fetchPeopleListSuccess, fetchPeopleListError } from "./peopleListSlice";
import { call, put, takeLatest } from "@redux-saga/core/effects";

function* fetchPeopleListHandler() {
    const genrePath = `${apiLink}person/popular${apiKey}${language}`;

    try {
        const peopleList = yield call(apiConnect, genrePath);
        yield put(fetchPeopleListSuccess(peopleList));
    } catch (error) {
        yield put(fetchPeopleListError())
    };
};

export function* watchFetchPeopleList() {
    yield takeLatest(fetchPeopleList.type, fetchPeopleListHandler);
};