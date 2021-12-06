import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommon, selectError, selectLoading } from "../../common/commonSlice";
import { TilesList } from "../../common/TilesList";
import { Pagination } from "../../common/Pagination";
import { StateChecker } from "../../common/StateChecker";
import { Subtitle } from "../../common/Subtitle";
import { PeopleTile } from "../../common/tiles/PeopleTile";
import { fetchPeopleList, resetStatePeopleList, selectPeoplesByQuery } from "./peopleListSlice";
import { Header } from "../../common/Header";
import { useQueryParameter } from "../../queryParameters";
import { startPage } from "../../common/startPage";
import { useUrlParameter } from "../urlHooks";
import SearchQueryParamName from "../../common/Header/Search/searchQueryParamName";
import Container from "../../common/Container";


export const PeopleList = () => {
    const dispatch = useDispatch();

    const query = useQueryParameter(SearchQueryParamName);
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    const results = useSelector((state) => selectPeoplesByQuery(state, query));
    const urlPageNumber = +useUrlParameter("page");
    const page = startPage(urlPageNumber);

    useEffect(() => {
        dispatch(fetchCommon());
        dispatch(fetchPeopleList({ page }));
        return() => resetStatePeopleList();
    }, [dispatch, page]);
    return (
        <>
            <StateChecker isLoading={isLoading} isError={isError}>
                <Header />
                <Container>
                    <Subtitle title={"Popular people"} />
                    <TilesList>
                        {results.map(({ id, profile_path, name }) => (
                            <PeopleTile
                                key={id}
                                poster_path={profile_path}
                                title={name}
                            />
                        ))}
                    </TilesList>
                    <Pagination />
                </Container>
            </StateChecker>
        </>
    );
};