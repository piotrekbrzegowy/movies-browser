import { useSelector } from "react-redux";
import { fetchPerson, selectPersonCredtis } from "./personSlice";
import { PersonTileDetails } from "./../../common/tiles/PersonTileDetails";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Subtitle } from "./../../common/Subtitle";
import { TilesList } from "../../common/TilesList";
import { MovieTile } from "../../common/tiles/MovieTile";
import Container from "./../../common/Container";
import { Header } from "./../../common/Header";
import { useLocation } from "react-router-dom";

export const PersonPage = () => {
  const location = useLocation();
  const id = location.pathname.substring(14);
  const { cast, crew } = useSelector(selectPersonCredtis);

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchPerson({ id })), [dispatch, id]);
  return (
    <>
      <Header />
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
    </>
  );
};
