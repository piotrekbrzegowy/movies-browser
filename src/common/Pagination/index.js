import { NextArrow } from "./NextArrow";
import { PreviousArrow } from "./PreviousArrow";
import { Wrapper, Button, PaginationText, PaginationNumber } from "./styled";
import { useUrlParameter, useChangeUrlParameters } from "./../../features/urlHooks";
import { startPage } from "../startPage";
import { selectAllPages } from "../../features/MovieList/movieListSlice";
import { useSelector } from "react-redux";
import { selectAllPeoplePage } from "../../features/PeopleList/peopleListSlice";

export const Pagination = () => {
  const moviesPages = useSelector(selectAllPages);
  const peoplePages = useSelector(selectAllPeoplePage);
  const hashString = window.location.hash;
  const allPages = hashString === "/movies" ? moviesPages : peoplePages;

  const intViewportWidth = window.innerWidth;
  const mobileMax = 767;
  const urlPageNumber = +useUrlParameter("page");
  const page = startPage(urlPageNumber);
  const changeUrlParameters = useChangeUrlParameters();

  const changeNumerPage = (page) => {
    changeUrlParameters([
      {
        key: "page",
        value: page,
      },
    ]);
  };
  return (
    <Wrapper>
      <Button disabled={page === 1} onClick={() => changeNumerPage(1)}>
        <PreviousArrow disabled={page === 1} />
        {intViewportWidth < mobileMax ? <PreviousArrow disabled={page === 1} /> : "First"}
      </Button>
      <Button disabled={page === 1} onClick={() => changeNumerPage(page - 1)}>
        <PreviousArrow disabled={page === 1} />
        {intViewportWidth < mobileMax ? "" : "Previous"}
      </Button>
      <PaginationText>Page</PaginationText>
      <PaginationNumber>{page}</PaginationNumber>
      <PaginationText>of</PaginationText>
      <PaginationNumber>{allPages}</PaginationNumber>
      <Button disabled={page === allPages} onClick={() => changeNumerPage(page + 1)}>
        {intViewportWidth < mobileMax ? "" : "Next"}
        <NextArrow disabled={page === allPages} />
      </Button>
      <Button disabled={page === allPages} onClick={() => changeNumerPage(allPages)}>
        {intViewportWidth < mobileMax ? <NextArrow disabled={page === allPages} /> : "Last"}
        <NextArrow disabled={page === allPages} />
      </Button>
    </Wrapper>
  );
};
