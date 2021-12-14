import { useSelector } from "react-redux";
import { fetchPerson, selectPersonCredtis } from "./personSlice";
import { PersonTileDetails } from "./../../common/tiles/PersonTileDetails";
import { Header } from "./../../common/tiles/PersonTileDetails/styled";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const PersonDetails = () => {
  const { id } = useParams();
  // const { crew, cast } = useSelector(selectPersonCredtis);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchPerson({ id })), [dispatch, id]);
  return (
    <>
      <PersonTileDetails />
      {/* <Header>{`Movies - Cast (${cast.length})`}</Header> */}
    </>
  );
};
