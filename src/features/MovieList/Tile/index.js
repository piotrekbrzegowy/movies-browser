import { Content, DetailsWrapper, Image, Rating, RatingsWrapper, Subtitle, Tag, Tags, Title, Votes, Wrapper } from "./styled";
import poster from "./images/poster.jpg";
import { ReactComponent as StarIcon } from "./images/star.svg"

export function Tile() {
    return (
        <Wrapper>
            <Image src={poster} alt="poster description" />
            <Content>
                <DetailsWrapper>
                    <Title>Mulan long title long titleMulan long title long</Title>
                    <Subtitle>2020</Subtitle>
                    <Tags>
                        <Tag>Action</Tag><Tag>Adventure</Tag><Tag>Drama</Tag>
                    </Tags>
                </DetailsWrapper>
                <RatingsWrapper>
                    <StarIcon />
                    <Rating>7,8</Rating>
                    <Votes>35 votes</Votes>
                </RatingsWrapper>
            </Content>
        </Wrapper>
    );
};
