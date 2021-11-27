import { Wrapper, Image, Content, DetailsWrapper, Title, Subtitle } from "./styled";
import { Rating } from "../../Rating";

export function MovieTile({ title, subtitle, poster_path, votes, rate }) {
    return (
        <Wrapper>
            <Image src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "no image"} alt="poster description" />
            <Content>
                <DetailsWrapper>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                </DetailsWrapper>
                <Rating votes={votes} rate={rate} />
            </Content>
        </Wrapper>
    );
};
