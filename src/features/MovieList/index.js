import { TilesList } from "../../common/TilesList";
import { Pagination } from "./../../common/Pagination";
import { MovieTile } from "../../common/tiles/MovieTile";
import { Subtitle } from "../../common/Subtitle";
import { fetchMovieList, selectMoviesByQuery, resetState } from "./movieListSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCommon, selectError, selectLoading } from "../../common/commonSlice";
import { StateChecker } from "../../common/StateChecker";
import { startPage } from "../../common/startPage";
import { useUrlParameter } from "../urlHooks";
import { useQueryParameter } from "../../queryParameters";
import { Header } from "../../common/Header";
import SearchQueryParamName from "../../common/Header/Search/searchQueryParamName";
import Container from "../../common/Container";
import { PersonTileDetails } from "../../common/tiles/PersonTileDetails";

export function MovieList() {
  const dispatch = useDispatch();

  const query = useQueryParameter(SearchQueryParamName);
  const results = useSelector((state) => selectMoviesByQuery(state, query));

  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const urlPageNumber = +useUrlParameter("page");
  const page = startPage(urlPageNumber);

  useEffect(() => {
    dispatch(fetchMovieList({ page }));
    dispatch(fetchCommon());
    return () => resetState();
  }, [dispatch, page]);

  return (
    <>
      <StateChecker isLoading={isLoading} isError={isError}>
        <Header />
        <Container>
          <PersonTileDetails></PersonTileDetails>
          <Subtitle title={"popular movies"} />
          <TilesList>
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
          </TilesList>
          <Pagination />
        </Container>
      </StateChecker>
    </>
  );
}
