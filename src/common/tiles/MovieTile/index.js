import { Wrapper, Image, Content, DetailsWrapper, Title, Subtitle } from "./styled";

export function MovieTile({ title, subtitle, poster_path}) {
    return (
        <Wrapper>
            <Image src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "no image"} alt={`${title} poster`} />
            <Content>
                <DetailsWrapper>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle.slice(0, 4)}</Subtitle>
                </DetailsWrapper>
            </Content>
        </Wrapper>
    );
};
