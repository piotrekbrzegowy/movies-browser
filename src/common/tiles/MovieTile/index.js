import { Wrapper, Image, Content, DetailsWrapper, Title, Subtitle, NoImage } from "./styled";
import { Rating } from "../../Rating";
import { Tags } from "../../Tags";
import emptyMoviePoster from "./images/emptyMoviePoster.svg";

export function MovieTile({ id, title, subtitle, poster_path, votes, rate, genre_ids }) {
  return (
    <Wrapper to={`/movies/movie/${id}`}>
      {poster_path ? (
        <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`${title} poster`}/>
      ) : (
        <NoImage src={emptyMoviePoster} />
      )}
      <Content>
        <DetailsWrapper>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Tags genre_ids={genre_ids} />
        </DetailsWrapper>
        <Rating votes={votes} rate={rate} />
      </Content>
    </Wrapper>
  );
}
