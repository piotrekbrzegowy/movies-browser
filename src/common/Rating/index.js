import { RatingWrapper, Rate, Votes, StarIcon } from "./styled";
import star from "./icons/star.svg";

export function Rating({ rate, votes }) {
    return (
        <RatingWrapper>
            <StarIcon src={star} />
            <Rate>{rate}</Rate>
            <Votes>{votes} votes</Votes>
        </RatingWrapper>
    );
};