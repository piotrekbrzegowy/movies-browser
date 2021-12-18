import { useSelector } from "react-redux";
import { fetchPerson, selectError, selectLoading, selectPersonCredits, resetState } from "./personSlice";
import { PersonTileDetails } from "./../../common/tiles/PersonTileDetails";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Subtitle } from "./../../common/Subtitle";
import { TilesList } from "../../common/TilesList";
import { MovieTile } from "../../common/tiles/MovieTile";
import Container from "./../../common/Container";
import { Header } from "./../../common/Header";
import { useLocation } from "react-router-dom";
import { StateChecker } from "../../common/StateChecker";

export const PersonPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const id = location.pathname.substring(14);

  const { cast, crew } = useSelector(selectPersonCredits);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchPerson({ id }));
    return () => resetState();
  }, [dispatch, id]);

  return (
    <>
      <Header />
      <StateChecker isLoading={isLoading} isError={isError}>
        <Container person>
          <PersonTileDetails />
          {cast && (
            <>
              <Subtitle title={`Movies - Cast (${cast.length})`} />
              <TilesList>
                {cast.map(({ id, poster_path, title, release_date, vote_count, vote_average, genre_ids, character }) => (
                  <MovieTile
                    key={id}
                    id={id}
                    poster_path={poster_path}
                    title={title}
                    subtitle={release_date && `${character} (${release_date.slice(0, 4)})`}
                    genre_ids={genre_ids}
                    votes={vote_count}
                    rate={vote_average}
                  />
                ))}
              </TilesList>
            </>
          )}
          {crew && (
            <>
              <Subtitle title={`Movies - Crew  (${crew.length})`} />
              <TilesList>
                {crew.map(({ id, poster_path, title, release_date, vote_count, vote_average, genre_ids, job }) => (
                  <MovieTile
                    key={id}
                    id={id}
                    poster_path={poster_path}
                    title={title}
                    subtitle={release_date && `${job} (${release_date.slice(0, 4)})`}
                    genre_ids={genre_ids}
                    votes={vote_count}
                    rate={vote_average}
                  />
                ))}
              </TilesList>
            </>
          )}
        </Container>
      </StateChecker>
    </>
  );
};
