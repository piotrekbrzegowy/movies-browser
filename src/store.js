import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { fetchMovieListSuccess } from "./features/MovieList/movieListSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        state: fetchMovieListSuccess,
    },
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga);