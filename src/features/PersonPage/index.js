import { useSelector } from "react-redux";
import { selectPersonCredtis } from "./personSlice";
import { PersonTileDetails } from "./../../common/tiles/PersonTileDetails";
import { Header } from "./../../common/tiles/PersonTileDetails/styled";
export const PersonDetails = () => {
  //   const { crew, cast } = useSelector(selectPersonCredtis);

  return (
    <>
      <PersonTileDetails />
      <Header>sd</Header>
    </>
  );
};
