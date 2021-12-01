import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import movieListSlice from "./features/MovieList/movieListSlice";
import rootSaga from "./rootSaga";
import commonSlice from "./common/commonSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        movieList: movieListSlice,
        common: commonSlice,
    },
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga);