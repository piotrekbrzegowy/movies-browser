import { Title } from "../../../common/tiles/MovieTile/styled";
import { Container, ContentPeopleTile, Picture } from "./styled";
import emptyPoster from "./svg/emptyPoster.svg"


export const PeopleTile = ({ poster_path, title }) => {

    return (
        <Container>
            <Picture src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` :`${emptyPoster}`} />
            <ContentPeopleTile>
                    <Title>{title}</Title>
            </ContentPeopleTile>
        </Container>
    );
};