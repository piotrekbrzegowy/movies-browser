import { Tags } from "../../Tags";
import { Rating } from "../../Rating";
import poster from "./images/poster.jpg"
import { Wrapper, Image, Content, DetailsWrapper, Title, Subtitle, MovieDetailsTitle, MovieDetailsWrapper, MovieDetails, MovieDescription } from "./styled";

export function MovieTileDetails({ title, subtitle, tags, rate, votes, description }) {
    return (
        <Wrapper>
            <Image src={poster} alt="poster description" />
            <Content>
                <DetailsWrapper>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                    <MovieDetailsWrapper>
                        <MovieDetails><MovieDetailsTitle>Production:</MovieDetailsTitle>China, United States of America</MovieDetails>
                        <MovieDetails><MovieDetailsTitle>Release date:</MovieDetailsTitle>24.10.2020</MovieDetails>
                    </MovieDetailsWrapper>
                    <Tags tags={tags} />
                    <Rating rate={rate} votes={votes} />
                </DetailsWrapper>
                <MovieDescription>{description}</MovieDescription>
            </Content>
        </Wrapper>
    );
};