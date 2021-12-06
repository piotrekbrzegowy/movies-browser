import { Image, Title } from "../MovieTile/styled";
import { Container, ContentPeopleTile } from "./styled";

export const PeopleTile = ({ poster_path, title }) => {
    return (
        <Container>
            <Image src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "no image"} alt={`${title} poster`} />
            <ContentPeopleTile>
                    <Title>{title}</Title>
            </ContentPeopleTile>
        </Container>
    );
};