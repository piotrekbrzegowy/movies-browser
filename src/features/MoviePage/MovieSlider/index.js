import { Rating } from "../../../common/Rating";
import { MovieBackdrop, MovieDetailsWrapper, MovieSliderWrapper, SliderBackground, Title } from "./styled";
import poster from "./images/slider-background.jpg";

export const MovieSlider = ({ title }) => {
    return (
        <SliderBackground>
            <MovieSliderWrapper>
                <MovieDetailsWrapper>
                    <Title>{title}</Title>
                    <Rating moviePage rate="7,9" votes="650"/>
                </MovieDetailsWrapper>
                <MovieBackdrop src={poster} />
            </MovieSliderWrapper>
        </SliderBackground>
    )
};