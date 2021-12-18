import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import movieListSlice from "./features/MovieList/movieListSlice";
import rootSaga from "./rootSaga";
import commonSlice from "./common/commonSlice";
import peopleListSlice from "./features/PeopleList/peopleListSlice";
import personSlice from "./features/PersonPage/personSlice";
import elementSlice from "./features/elementSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({

    reducer: {
        movieList: movieListSlice,
        common: commonSlice,
        peopleList: peopleListSlice,
        element: elementSlice,
        personDetails: personSlice,
    },
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga);
