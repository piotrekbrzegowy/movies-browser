import { Container, ContentPeopleTile, Picture, Subtitle, Title } from "./styled";
import emptyPoster from "../../../assets/emptyPoster.svg";

export const PersonTile = ({ id, poster_path, title, character, job }) => {
    return (
        <Container to={`/people/person/${id}`}>
            <Picture src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : `${emptyPoster}`} />
            <ContentPeopleTile>
                <Title>{title}</Title>
                {character && <Subtitle>{character}</Subtitle>}
                {job && <Subtitle>{job}</Subtitle>}
            </ContentPeopleTile>
        </Container>
    );
};