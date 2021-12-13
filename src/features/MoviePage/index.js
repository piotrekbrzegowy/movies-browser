import { MovieSlider } from "./MovieSlider";
import { MovieTileDetails } from "../../common/tiles/MovieTileDetails";
import Container from "../../common/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchElement, resetState, selectElement, selectError, selectLoading } from "../elementSlice";
import { useEffect } from "react";
import { StateChecker } from "../../common/StateChecker";
import { Header } from "../../common/Header";
import { useUrlParameter } from "../urlHooks";
import { useQueryParameter } from "../../queryParameters";

export function MoviePage() {

    const dispatch = useDispatch();

    const query = useQueryParameter("id");
    console.log(query)
    const elementData = useSelector(selectElement);
    const id = +useUrlParameter("id");
    
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
                <MovieSlider
                    title={elementData.title}
                    backdrop={elementData.backdrop_path}
                    rate={elementData.vote_average}
                    votes={elementData.vote_count} />
                <Container>
                    <MovieTileDetails
                        poster_path={elementData.poster_path}
                        title={elementData.title}
                        subtitle={elementData.release_date}
                        production_countries={elementData.production_countries}
                        genres={elementData.genres}
                        rate={elementData.vote_average}
                        votes={elementData.vote_count}
                        description={elementData.overview} />
                </Container>
            </StateChecker>
        </>
    )
};

