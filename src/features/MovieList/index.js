import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { TilesList } from "../../common/TilesList";
import { Pagination } from "./../../common/Pagination";
import { MovieTile } from "../../common/tiles/MovieTile";
import { Subtitle } from "../../common/Subtitle";
import { fetchMovieList, selectMoviesByQuery, resetState, selectStatus, toggleStatus } from "./movieListSlice";
import { fetchCommon, selectError, selectLoading } from "../../common/commonSlice";
import { StateChecker } from "../../common/StateChecker";
import { startPage } from "../../common/startPage";
import { useUrlParameter } from "../urlHooks";
import { useQueryParameter } from "../../queryParameters";
import { Header } from "../../common/Header";
import { Container } from "../../common/Container";
import SearchQueryParamName from "../../common/Header/Search/searchQueryParamName";

export function MovieList() {
  const dispatch = useDispatch();

  const query = useQueryParameter(SearchQueryParamName);
  const results = useSelector((state) => selectMoviesByQuery(state, query));

  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const urlPageNumber = +useUrlParameter("page");
  const page = startPage(urlPageNumber);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchMovieList({ page, query }));
    dispatch(fetchCommon());
    dispatch(toggleStatus());
    return () => resetState();
  }, [dispatch, page, query]);

  return (
    <>
      <Header />
      <Container>
        <StateChecker isLoading={isLoading} isError={isError} status={status} results={results} query={query}>
          <Subtitle title={query ? `Search results for "${query}"` : "Popular movies"} />
          <TilesList>
            {results.map(({ id, poster_path, title, release_date, vote_count, vote_average, genre_ids }) => (
              <MovieTile
                key={id}
                id={id}
                poster_path={poster_path}
                title={title}
                subtitle={release_date && release_date.slice(0, 4)}
                genre_ids={genre_ids}
                votes={vote_count}
                rate={vote_average}
              />
            ))}
          </TilesList>
          <Pagination />
        </StateChecker>
      </Container>
    </>
  );
}
