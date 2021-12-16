import { NextArrow } from "./NextArrow";
import { PreviousArrow } from "./PreviousArrow";
import { Wrapper, Button, PaginationText, PaginationNumber, First, Previous, Next, Last } from "./styled";
import { useUrlParameter, useChangeUrlParameters } from "./../../features/urlHooks";
import { startPage } from "../startPage";
import { SecondNextArrow } from "./NextArrow/styled";

export const Pagination = () => {
  const allPages = 500;
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
        <First>First</First>
      </Button>
      <Button disabled={page === 1} onClick={() => changeNumerPage(page - 1)}>
        <PreviousArrow disabled={page === 1} />
        <Previous>Previous</Previous>
      </Button>
      <PaginationText>Page</PaginationText>
      <PaginationNumber>{page}</PaginationNumber>
      <PaginationText>of</PaginationText>
      <PaginationNumber>{allPages}</PaginationNumber>
      <Button disabled={page === allPages} onClick={() => changeNumerPage(page + 1)}>
        <Next>Next</Next>
        <NextArrow disabled={page === allPages} />
      </Button>
      <Button disabled={page === allPages} onClick={() => changeNumerPage(allPages)}>
        <Last>Last</Last>
        <NextArrow disabled={page === allPages} />
        <SecondNextArrow />
      </Button>
    </Wrapper>
  );
};
