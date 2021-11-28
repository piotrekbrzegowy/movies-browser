import { Container, MovieTiles } from "./Container";
import { MovieTile } from "../../common/tiles/MovieTile"
import { Header } from "./Header";
import { selectMovieList, fetchMovieList } from "./movieListSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export function MovieList() {

    const dispatch = useDispatch();
    const results = useSelector(selectMovieList);

    useEffect(() => {
        dispatch(fetchMovieList());
    }, []);
    console.log(results);
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