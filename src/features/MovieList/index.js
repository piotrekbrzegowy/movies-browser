import { Container, MovieTiles } from "./Container";
import { MovieTile } from "../../common/tiles/MovieTile"
import { Header } from "./Header";
import { fetchMovieList, selectMoviesByQuery } from "./movieListSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useQueryParameter } from "../../queryParameters";
import SearchQueryParamName from "../../common/Header/Search/searchQueryParamName";

export function MovieList() {
    const query = useQueryParameter(SearchQueryParamName);
    const dispatch = useDispatch();
    const results = useSelector(state => selectMoviesByQuery(state, query));

    useEffect(() => {
        dispatch(fetchMovieList());
    }, []);

    return (
        <>
            <Container>
                <Header />
                <MovieTiles>
                    {results.map(({
                        id,
                        poster_path,
                        title,
                        release_date,
                        vote_count,
                        vote_average,
                    }) => (
                        <MovieTile
                            key={id}
                            poster_path={poster_path}
                            title={title}
                            subtitle={release_date}
                            votes={vote_count}
                            rate={vote_average}
                        />
                    ))}
                </MovieTiles>
            </Container>
        </>
    );
};