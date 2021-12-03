import { RatingWrapper, Rate, Votes, StarIcon, RateSpan, RateDiv } from "./styled";
import star from "./icons/star.svg";

export function Rating({ rate, votes, moviePage }) {
    return (
        <RatingWrapper moviePage={moviePage}>
           <RateDiv moviePage={moviePage}><StarIcon moviePage={moviePage} src={star} />
            <Rate moviePage={moviePage}>{rate}{moviePage && <RateSpan> / 10</RateSpan>}</Rate></RateDiv>
            <Votes moviePage={moviePage}>{votes} votes</Votes>
        </RatingWrapper>
    );
};