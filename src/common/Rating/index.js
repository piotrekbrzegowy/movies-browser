import { RatingWrapper, Rate, Votes, StarIcon, RateSpan, RateDiv } from "./styled";
import star from "./icons/star.svg";

export function Rating({ rate, votes, moviePage, moviePageDetails }) {
    return (
        <RatingWrapper moviePage={moviePage}>
            <RateDiv moviePage={moviePage}><StarIcon moviePage={moviePage} src={star} />
                <Rate moviePageDetails={moviePageDetails} moviePage={moviePage}>
                    {rate}{moviePage && <RateSpan> / 10</RateSpan>}{moviePageDetails && <RateSpan moviePageDetails> / 10</RateSpan>}
                </Rate>
            </RateDiv>
            <Votes moviePage={moviePage} moviePageDetails={moviePageDetails}>{votes} votes</Votes>
        </RatingWrapper>
    );
};