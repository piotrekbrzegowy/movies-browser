import { Container, MovieTiles } from "./Container";
import { MovieTile } from "../../common/tiles/MovieTile"
import { Header } from "./Header";
import { apiConnect } from "../../common/apiConnect";
import { fetchMovieListSuccess, selectMovieList, fetchMovieList } from "./movieListSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export function MovieList() {
    const path = "https://api.themoviedb.org/3/movie/popular?api_key=54628f6d7df0fa35378bd39ea74a55d1&language=en-US&page=1";

    apiConnect(path)
        .then(data => {
            console.log(fetchMovieListSuccess(data))
        })
        .catch(error => console.error(error))

    const dispatch = useDispatch();
    const results = useSelector(selectMovieList);

    useEffect(() => {
        dispatch(fetchMovieList());
    })
    return (
        <>
            <Container>
                <Header />
                <MovieTiles>
        {results.map(({
            title,
        }) => (
            <MovieTile title={title} />
        ))}
                </MovieTiles>
            </Container>
        </>
    );
};