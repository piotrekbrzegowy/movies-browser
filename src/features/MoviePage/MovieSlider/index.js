import { Rating } from "../../../common/Rating";
import { MovieBackdrop, MovieDetailsWrapper, MovieSliderWrapper, SliderBackground, Title } from "./styled";

export const MovieSlider = ({ title, backdrop, rate, votes }) => {
    return (
        <SliderBackground>
            <MovieSliderWrapper>
                <MovieDetailsWrapper>
                    <Title>{title}</Title>
                    <Rating moviePage rate={rate} votes={votes} />
                </MovieDetailsWrapper>
                <MovieBackdrop src={`https://image.tmdb.org/t/p/original/${backdrop}`} />
            </MovieSliderWrapper>
        </SliderBackground>
    )
};