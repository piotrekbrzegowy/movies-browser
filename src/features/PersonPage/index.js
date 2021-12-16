import { useSelector } from "react-redux";
import { fetchPerson, selectPersonCredtis } from "./personSlice";
import { PersonTileDetails } from "./../../common/tiles/PersonTileDetails";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Subtitle } from "./../../common/Subtitle";
import { TilesList } from "../../common/TilesList";
import { MovieTile } from "../../common/tiles/MovieTile";
export const PersonDetails = () => {
  const { id } = useParams();
  const { cast, crew } = useSelector(selectPersonCredtis);

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchPerson({ id })), [dispatch, id]);
  return (
    <>
      <PersonTileDetails />
      {cast && (
        <>
          <Subtitle title={`Movies - Cast (${cast.length})`} />
          <TilesList>
            {cast.map(({ id, poster_path, title, release_date, vote_count, vote_average, genre_ids, character }) => (
              <MovieTile
                key={id}
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
        </>
      )}
    </>
  );
};
