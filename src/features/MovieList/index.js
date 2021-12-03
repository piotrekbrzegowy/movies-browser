import { MovieTiles } from "../../common/MovieTiles";
import { Pagination } from "./../../common/Pagination";
import { MovieTile } from "../../common/tiles/MovieTile";
import { Subtitle } from "../../common/Subtitle";
import { fetchMovieList, selectCurrentPage, selectAllPages, selectMoviesByQuery } from "./movieListSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCommon, selectError, selectLoading } from "../../common/commonSlice";
import { StateChecker } from "../../common/StateChecker";
import { useQueryParameter } from "../../queryParameters";
import SearchQueryParamName from "../../common/Header/Search/searchQueryParamName";
import Container from "../../common/Container";

export function MovieList() {
  const dispatch = useDispatch();

  const query = useQueryParameter(SearchQueryParamName);
  const results = useSelector(state => selectMoviesByQuery(state, query));
  const currentPage = useSelector(selectCurrentPage);
  const allPages = useSelector(selectAllPages);
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
          <Subtitle title={"popular movies"}>
          </Subtitle>
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
