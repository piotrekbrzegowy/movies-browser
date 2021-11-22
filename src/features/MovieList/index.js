import { Container } from "./Container";
import { MovieTile } from "../../common/tiles/MovieTile"
import { MovieTileDetails } from "../../common/tiles/MovieTileDetails";

export function MovieList() {
    return (
        <>
            <Container>
                <MovieTile title="Mulan long title long titleMulan long title long" subtitle="2020" tags={["Action", "Drama", "Adventure"]} rate="7,9" votes="39" />
                <MovieTile title="Mulan long title long title Mulan long title long" subtitle="2020" tags={["Action", "Drama"]} rate="7,9" votes="39" />
                <MovieTile title="Mulan" subtitle="2020" tags={["Action"]} rate="9" votes="15" />
                <MovieTile title="Mulan" subtitle="2020" tags={["Action", "Drama", "Adventure"]} rate="7,9" votes="39" />
                <MovieTile title="Mulan" subtitle="2020" tags={["Action", "Drama", "Adventure"]} rate="7,9" votes="39" />
                <MovieTile title="Mulan" subtitle="2020" tags={["Action", "Drama", "Adventure"]} rate="7,9" votes="39" />
                <MovieTile title="Mulan" subtitle="2020" tags={["Action", "Drama", "Adventure"]} rate="7,9" votes="39" />
                <MovieTile title="Mulan" subtitle="2020" tags={["Action", "Drama", "Adventure"]} rate="7,9" votes="39" />
                <MovieTileDetails title="Mulan" subtitle="2020" tags={["Action", "Drama", "Adventure"]} rate="7,9" votes="39" description="A young Chinese maiden disguises herself as a male warrior in order to save her father. 
Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father."/>
            </Container>
        </>
    );
};