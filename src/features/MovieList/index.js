import { Container, MovieTiles } from "./Container";
import { Pagination } from "./../../common/Pagination";
import { MovieTile } from "../../common/tiles/MovieTile";
import { Header } from "./Header";
import { selectMovieList, fetchMovieList, selectCurrentPage, selectAllPages } from "./movieListSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCommon, selectError, selectLoading } from "../../common/commonSlice";
import { StateChecker } from "../../common/StateChecker";

export function MovieList() {
  const dispatch = useDispatch();

  const currentPage = useSelector(selectCurrentPage);
  const allPages = useSelector(selectAllPages);
  const results = useSelector(selectMovieList);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchMovieList());
    dispatch(fetchCommon());
  }, []);

  return (
    <>
      <Container>
        <StateChecker isLoading={isLoading} isError={isError}>
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
          <Pagination currentPage={currentPage} allPages={allPages} />
        </StateChecker>
      </Container>
    </>
  );
}
