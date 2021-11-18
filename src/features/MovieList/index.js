import { Container } from "./Container";
import { Tile } from "./Tile";
import { HeaderWrapper, PageHeader } from "./Tile/styled";

export function MovieList() {
    return (
        <>
        <HeaderWrapper><PageHeader>Popular movies</PageHeader></HeaderWrapper>
        <Container>
            <Tile/><Tile/><Tile/><Tile/><Tile/><Tile/><Tile/><Tile/>
        </Container>
        </>
    );
};