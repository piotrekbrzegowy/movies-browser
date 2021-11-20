import { RatingWrapper, Rate, Votes } from "./styled";
import { ReactComponent as StarIcon } from "./icons/star.svg";

export function Rating({ rate, votes }) {
    return (
        <RatingWrapper>
            <StarIcon />
            <Rate>{rate}</Rate>
            <Votes>{votes} votes</Votes>
        </RatingWrapper>
    );
};