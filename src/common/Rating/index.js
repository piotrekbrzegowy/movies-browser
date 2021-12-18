import { RatingWrapper, Rate, Votes, StarIcon, RateSpan, RateDiv } from "./styled";
import star from "../../assets/star.svg";

export function Rating({ rate, votes, moviePage, moviePageDetails }) {
    return (
        <>
            <RatingWrapper moviePage={moviePage}>
                {votes ?
                    <>
                        <RateDiv moviePage={moviePage}><StarIcon moviePage={moviePage} src={star} />
                            <Rate moviePageDetails={moviePageDetails} moviePage={moviePage}>
                                {rate}{moviePage && <RateSpan> / 10</RateSpan>}{moviePageDetails && <RateSpan moviePageDetails> / 10</RateSpan>}
                            </Rate>
                        </RateDiv>
                        <Votes moviePage={moviePage} moviePageDetails={moviePageDetails}>{votes} votes</Votes>
                    </>
                    :
                    <Votes moviePage={moviePage} moviePageDetails={moviePageDetails}>No votes yet</Votes>}
            </RatingWrapper>
        </>
    );
};