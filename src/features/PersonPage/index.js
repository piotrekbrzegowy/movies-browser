import { useSelector } from "react-redux";
import { selectPersonCredtis } from "./personSlice";
import { PersonTileDetails } from "./../../common/tiles/PersonTileDetails";
export const PersonDetails = () => {
  const { crew, cast } = useSelector(selectPersonCredtis);
  return <PersonTileDetails />;
};
