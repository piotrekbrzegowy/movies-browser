import { NextArrow } from "./NextArrow";
import { PreviousArrow } from "./PreviousArrow";
import { Wrapper, Button, PaginationText, PaginationNumber } from "./styled";
import { useUrlParameter, useChangeUrlParameters } from "./../../features/urlHooks";
import { startPage } from "../startPage";
import { selectAllPages } from "../../features/MovieList/movieListSlice";
import { useSelector } from "react-redux";

export const Pagination = () => {
  const intViewportWidth = window.innerWidth;
  const mobileMax = 767;
  const allPages = useSelector(selectAllPages);
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
        <PreviousArrow disabled />
        {intViewportWidth < mobileMax ? <PreviousArrow disabled /> : "First"}
      </Button>
      <Button disabled={page === 1} onClick={() => changeNumerPage(page - 1)}>
        <PreviousArrow disabled />
        {intViewportWidth < mobileMax ? "" : "Previous"}
      </Button>
      <PaginationText>Page</PaginationText>
      <PaginationNumber>{page}</PaginationNumber>
      <PaginationText>of</PaginationText>
      <PaginationNumber>{allPages}</PaginationNumber>
      <Button disabled={page === allPages} onClick={() => changeNumerPage(page + 1)}>
        {intViewportWidth < mobileMax ? "" : "Next"}
        <NextArrow />
      </Button>
      <Button disabled={page === allPages} onClick={() => changeNumerPage(allPages)}>
        {intViewportWidth < mobileMax ? <NextArrow /> : "Last"}
        <NextArrow />
      </Button>
    </Wrapper>
  );
};
