import { useSelector } from "react-redux";
import { fetchPerson, selectPersonCredtis } from "./personSlice";
import { PersonTileDetails } from "./../../common/tiles/PersonTileDetails";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Subtitle } from "./../../common/Subtitle";
export const PersonDetails = () => {
  const { id } = useParams();
  const { cast } = useSelector(selectPersonCredtis);

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchPerson({ id })), [dispatch, id]);
  return (
    <>
      <PersonTileDetails />
      <Subtitle title={`Movies - Cast (${cast.length})`} />
    </>
  );
};
