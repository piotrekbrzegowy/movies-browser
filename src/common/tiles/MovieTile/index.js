import { Wrapper, Image, Content, DetailsWrapper, Title, Subtitle } from "./styled";
import { Rating } from "../../Rating";
import { Tags } from "../../Tags";

export function MovieTile({ title, subtitle, poster_path, votes, rate, genre_ids }) {
    return (
        <Wrapper>
            <Image src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "no image"} alt={`${title} poster`} />
            <Content>
                <DetailsWrapper>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle.slice(0, 4)}</Subtitle>
                    <Tags genre_ids={genre_ids} />
                </DetailsWrapper>
                <Rating votes={votes} rate={rate} />
            </Content>
        </Wrapper>
    );
};
