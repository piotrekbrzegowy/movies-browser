import { Container } from "./Container";
import { MovieTile } from "../../common/tiles/MovieTile"

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
            </Container>
        </>
    );
};