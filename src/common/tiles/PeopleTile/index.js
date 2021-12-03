import { Content, Image, Title, Wrapper } from "../MovieTile/styled";
import { Container } from "./styled";

export const PeopleTile = ({ poster_path, title }) => {
    return (
        <Container>
            <Image src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "no image"} alt={`${title} poster`} />
            <Content>
                    <Title>{title}</Title>
            </Content>
        </Container>
    );
};