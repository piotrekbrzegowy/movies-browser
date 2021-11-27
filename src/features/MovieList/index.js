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
    })
    
    return (
        <>
            <Container>
                <Header />
                <MovieTiles>
                </MovieTiles>
            </Container>
        </>
    );
};