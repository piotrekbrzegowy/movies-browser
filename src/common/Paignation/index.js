import { NextArrow } from "./NextArrow";
import { PreviousArrow } from "./PreviousArrow";
import { Wrapper, Button, PaginationText, PaginationNumber } from "./styled";

export const Pagination = () => {
  const intViewportWidth = window.innerWidth;
  const mobileMax = 767;
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
      <PaginationNumber>1</PaginationNumber>
      <PaginationText>of</PaginationText>
      <PaginationNumber>500</PaginationNumber>
      <Button>
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
