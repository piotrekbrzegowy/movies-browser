import { NextArrow } from "./NextArrow";
import { PreviousArrow } from "./PreviousArrow";
import { Wrapper, Button, PaginationText, PaginationNumber } from "./styled";
import { useUrlParameter, useUrlPageParameters } from "./../../features/urlHooks";

export const Pagination = ({ currentPage, allPages }) => {
  const intViewportWidth = window.innerWidth;
  const mobileMax = 767;
  const page = +useUrlParameter("page");
  const changeUrlParameters = useUrlPageParameters();

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
      <Button disabled>
        <PreviousArrow disabled />
        {intViewportWidth < mobileMax ? <PreviousArrow disabled /> : "First"}
      </Button>
      <Button disabled>
        <PreviousArrow disabled />
        {intViewportWidth < mobileMax ? "" : "Previous"}
      </Button>
      <PaginationText>Page</PaginationText>
      <PaginationNumber>{currentPage}</PaginationNumber>
      <PaginationText>of</PaginationText>
      <PaginationNumber>{allPages}</PaginationNumber>
      <Button onClick={() => changeNumerPage(page + 1)}>
        {intViewportWidth < mobileMax ? "" : "Next"}
        <NextArrow />
      </Button>
      <Button>
        {intViewportWidth < mobileMax ? <NextArrow /> : "Last"}
        <NextArrow />
      </Button>
    </Wrapper>
  );
};
