import { MovieSlider } from "./MovieSlider";
import { MovieTileDetails } from "../../common/tiles/MovieTileDetails";
import Container from "../../common/Container";

export const MoviePage = () => {
    return (
        <>
            <MovieSlider title="Mulan long title" />
            <Container>
                <MovieTileDetails title="Mulan" subtitle="2020" rate="7,9" votes="200" description="A young Chinese maiden disguises herself as a male warrior in order to save her father. 
Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father."/>
            </Container>
        </>
    )
};