import { apiConnect } from "../common/apiConnect";
import { apiLink, apiKey, language } from "../common/apiConfiguration";
import { fetchElement, fetchElementSuccess, fetchElementError, fetchElementCreditsSuccess } from "./elementSlice";
import { call, put, takeLatest, delay } from "redux-saga/effects";

function* fetchElementHandler({ payload: { id } }) {

    const movieElement = `${apiLink}movie/${id}${apiKey}${language}`;
    const movieCreditsElement = `${apiLink}movie/${id}/credits${apiKey}${language}`;

    try {
        yield delay(1000);
        const elementData = yield call(apiConnect, movieElement);
        const elementCreditsData = yield call(apiConnect, movieCreditsElement);

        yield put(fetchElementSuccess(elementData));
        yield put(fetchElementCreditsSuccess(elementCreditsData));
    } catch (error) {
        yield put(fetchElementError());
    }
}

export function* watchFetchElement() {
    yield takeLatest(fetchElement.type, fetchElementHandler);
}
