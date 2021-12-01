import { Container, MovieTiles } from "./Container";
import { Pagination } from "./../../common/Pagination";
import { MovieTile } from "../../common/tiles/MovieTile";
import { Header } from "./Header";
import { selectMovieList, fetchMovieList, selectCurrentPage } from "./movieListSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCommon } from "../../common/commonSlice";

export function MovieList() {
  const dispatch = useDispatch();
  const results = useSelector(selectMovieList);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchMovieList());
    dispatch(fetchCommon());
  }, []);

  return (
    <>
      <Container>
        <Header />
        <MovieTiles>
          {results.map(({ id, poster_path, title, release_date, vote_count, vote_average, genre_ids }) => (
            <MovieTile
              key={id}
              poster_path={poster_path}
              title={title}
              subtitle={release_date}
              genre_ids={genre_ids}
              votes={vote_count}
              rate={vote_average}
            />
          ))}
        </MovieTiles>
        <Pagination currentPage={currentPage} />
      </Container>
    </>
  );
}
