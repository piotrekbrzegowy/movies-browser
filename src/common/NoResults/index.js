import { Subtitle } from "../Subtitle";
import { Picture, Wrapper } from "./styled";
import noResult from "../../assets/noResult.svg";

export const NoResults = ({ query }) => {

    return (
        <>
            <Subtitle title={`Sorry, there are no results for "${query}"`} />
            <Wrapper>
                <Picture src={noResult} />
            </Wrapper>

        </>
    );
};