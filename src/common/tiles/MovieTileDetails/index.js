import { Tags } from "../../Tags";
import { Rating } from "../../Rating";
import { Wrapper, Image, Content, DetailsWrapper, Title, Subtitle, MovieDetailsTitle, MovieDetailsWrapper, MovieDetails, MovieDescription, List, ListItem } from "./styled";
import { useSelector } from "react-redux";
import { selectElement } from "../../../features/elementSlice";

export function MovieTileDetails({ poster_path, title, subtitle, genres, rate, votes, description }) {

    const element = useSelector(selectElement);

    return (
        <Wrapper>
            <Content>
                <Image src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "no image"} alt={`${title} poster`} />
                <DetailsWrapper>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle.slice(0, 4)}</Subtitle>
                    <MovieDetailsWrapper>
                        <MovieDetails>
                            <MovieDetailsTitle>Production:</MovieDetailsTitle>
                            <List>
                                {element.production_countries.map(({ iso_3266_1, name }) =>
                                    (<ListItem key={name}>{name}</ListItem>))
                                }
                            </List>
                        </MovieDetails>
                        <MovieDetails>
                            <MovieDetailsTitle>Release date:</MovieDetailsTitle>{subtitle}
                        </MovieDetails>
                    </MovieDetailsWrapper>
                    <Tags movieDetailsGenres={genres} />
                    <Rating moviePageDetails rate={rate} votes={votes} />
                </DetailsWrapper>
            </Content>
            <MovieDescription>{description}</MovieDescription>
        </Wrapper>
    );
};