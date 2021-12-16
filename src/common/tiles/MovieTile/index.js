import { Wrapper, Image, Content, DetailsWrapper, Title, Subtitle, NoImage, CameraIcon } from "./styled";
import { Rating } from "../../Rating";
import { Tags } from "../../Tags";
import emptyMoviePoster from "./images/emptyMoviePoster.svg";

export function MovieTile({ title, subtitle, poster_path, votes, rate, genre_ids }) {
  return (
    <Wrapper>
      {poster_path ? (
        <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
      ) : (
        <>
          <NoImage src={emptyMoviePoster}>
            <CameraIcon></CameraIcon>
          </NoImage>
        </>
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
