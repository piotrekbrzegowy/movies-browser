import poster from "./images/poster.jpg";
import { Wrapper, Image, Content, DetailsWrapper, Title, Subtitle } from "./styled";
import { Rating } from "../../Rating";
import { Tags } from "../../Tags";

export function MovieTile({ title, subtitle, tags, rate, votes }) {
    return (
        <Wrapper>
            <Image src={poster} alt="poster description" />
            <Content>
                <DetailsWrapper>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                    <Tags tags={tags} />
                </DetailsWrapper>
                <Rating rate={rate} votes={votes} />
            </Content>
        </Wrapper>
    );
};
