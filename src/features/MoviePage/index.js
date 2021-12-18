import { MovieSlider } from "./MovieSlider";
import { MovieTileDetails } from "../../common/tiles/MovieTileDetails";
import { Container } from "../../common/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchElement, resetState, selectElement, selectElementCredits, selectError, selectLoading } from "../elementSlice";
import { useEffect } from "react";
import { StateChecker } from "../../common/StateChecker";
import { Header } from "../../common/Header";
import { useLocation } from "react-router-dom";
import { Subtitle } from "../../common/Subtitle";
import { PersonTile } from "../../common/tiles/PersonTile";
import { TilesList } from "../../common/TilesList";

export function MoviePage() {
    const dispatch = useDispatch();
    const location = useLocation();
    const id = location.pathname.substring(14);

    const elementData = useSelector(selectElement);
    const elementCreditsData = useSelector(selectElementCredits);
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchElement({ id }));
        return () => resetState();
    }, [dispatch, id]);

    return (
        <>
            <Header />
            <StateChecker isLoading={isLoading} isError={isError}>
                {elementData.backdrop_path &&
                    <MovieSlider
                        title={elementData.title}
                        backdrop={elementData.backdrop_path}
                        rate={elementData.vote_average}
                        votes={elementData.vote_count} />}
                <Container person>
                    <MovieTileDetails
                        poster_path={elementData.poster_path}
                        title={elementData.title}
                        subtitle={elementData.release_date}
                        production_countries={elementData.production_countries}
                        genres={elementData.genres}
                        rate={elementData.vote_average}
                        votes={elementData.vote_count}
                        description={elementData.overview} />

                    {elementCreditsData.cast && (
                        <>
                            <Subtitle title={`Cast`} />
                            <TilesList>
                                {elementCreditsData.cast.map(({ id, profile_path, name, character }) => (
                                    <PersonTile
                                        key={id}
                                        id={id}
                                        poster_path={profile_path}
                                        title={name}
                                        character={character}
                                    />
                                ))}
                            </TilesList>
                        </>
                    )}
                    {elementCreditsData.crew && (
                        <>
                            <Subtitle title={`Crew`} />
                            <TilesList>
                                {elementCreditsData.crew.map(({ id, profile_path, name, job }) => (
                                    <PersonTile
                                        key={id}
                                        id={id}
                                        poster_path={profile_path}
                                        title={name}
                                        job={job}
                                    />
                                ))}
                            </TilesList>
                        </>
                    )}
                </Container>
            </StateChecker>
        </>
    )
};

