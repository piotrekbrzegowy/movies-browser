import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import movieListSlice from "./features/MovieList/movieListSlice";
import rootSaga from "./rootSaga";
import commonSlice from "./common/commonSlice";
import peopleListSlice from "./features/PeopleList/peopleListSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        movieList: movieListSlice,
        common: commonSlice,
        peopleList: peopleListSlice,
    },
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga);