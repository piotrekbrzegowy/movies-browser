import { Tags } from "../../Tags";
import { Rating } from "../../Rating";
import { Wrapper, Image, Content, DetailsWrapper, Title, Subtitle, MovieDetailsTitle, MovieDetailsWrapper, MovieDetails, MovieDescription, List, ListItem, NoImage } from "./styled";
import { useSelector } from "react-redux";
import { selectElement } from "../../../features/elementSlice";
import emptyMoviePoster from "./images/emptyMoviePoster.svg";

export function MovieTileDetails({ poster_path, title, subtitle, genres, rate, votes, description }) {

    const element = useSelector(selectElement);

    return (
        <Wrapper>
            <Content>
                {poster_path ? (
                    <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`${title} poster`} />
                ) : (
                    <NoImage src={emptyMoviePoster} />
                )}
                <DetailsWrapper>
                    <Title>{title}</Title>
                    {subtitle && <Subtitle>{subtitle.slice(0, 4)}</Subtitle>}
                    <MovieDetailsWrapper>
                        <MovieDetails>
                            <MovieDetailsTitle>Production:</MovieDetailsTitle>
                            <List>
                                {element.production_countries.map(({ iso_3266_1, name }) =>
                                    (<ListItem key={name}>{name}</ListItem>))
                                }
                            </List>
                        </MovieDetails>
                        {subtitle && <MovieDetails>
                            <MovieDetailsTitle>Release date:</MovieDetailsTitle>{subtitle}
                        </MovieDetails>}
                    </MovieDetailsWrapper>
                    <Tags movieDetailsGenres={genres} />
                    <Rating moviePageDetails rate={rate} votes={votes} />
                </DetailsWrapper>
            </Content>
            <MovieDescription>{description}</MovieDescription>
        </Wrapper>
    );
};