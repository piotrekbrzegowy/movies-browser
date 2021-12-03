import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommon, selectError, selectLoading } from "../../common/commonSlice";
import Container from "../../common/Container";
import { Pagination } from "../../common/Pagination";
import { StateChecker } from "../../common/StateChecker";
import { selectAllPages, selectCurrentPage } from "../MovieList/movieListSlice";

export const PeopleList = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    const currentPage = useSelector(selectCurrentPage);
    const allPages = useSelector(selectAllPages);

    useEffect(() => {
        dispatch(fetchCommon());
      }, []);
    return (
        <>
            <Container>
                <StateChecker isLoading={isLoading} isError={isError}>
                    <>nanana</>
                    <Pagination currentPage={currentPage} allPages={allPages} />
                </StateChecker>
            </Container>
        </>
    );
};