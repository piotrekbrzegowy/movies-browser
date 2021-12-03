import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommon, selectError, selectLoading } from "../../common/commonSlice";
import Container from "../../common/Container";
import { TilesList } from "../../common/TilesList";
import { Pagination } from "../../common/Pagination";
import { StateChecker } from "../../common/StateChecker";
import { Subtitle } from "../../common/Subtitle";
import { PeopleTile } from "../../common/tiles/PeopleTile";
import { selectAllPages, selectCurrentPage } from "../MovieList/movieListSlice";
import { fetchPeopleList, selectPeopleList } from "./peopleListSlice";

export const PeopleList = () => {
    const dispatch = useDispatch();
    const peopleList = useSelector(selectPeopleList);
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    const currentPage = useSelector(selectCurrentPage);
    const allPages = useSelector(selectAllPages);

    useEffect(() => {
        dispatch(fetchCommon());
        dispatch(fetchPeopleList());
    }, []);
    return (
        <>
            <Container>
                <StateChecker isLoading={isLoading} isError={isError}>
                    <Subtitle title={"popular people"} />
                    <TilesList>
                        {peopleList.map(({ id, profile_path, name }) => (
                            <PeopleTile
                                key={id}
                                poster_path={profile_path}
                                title={name}
                            />
                        ))}
                    </TilesList>
                    <Pagination currentPage={currentPage} allPages={allPages} />
                </StateChecker>
            </Container>
        </>
    );
};