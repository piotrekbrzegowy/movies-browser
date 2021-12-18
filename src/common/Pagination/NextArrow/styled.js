import styled, { css } from "styled-components";
import { ReactComponent as RightArrow } from "../../../assets/vectorRight.svg";

export const Arrow = styled(RightArrow)`
  margin: 0 0 0 8px;
  height: 11px;
  width: 7px;
  color: ${({ theme }) => theme.color.scienceblue};
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.color.waterloo};
    `}
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin: 0px 4px;
    width: 5px;
    height: 8px;
  }
`;
export const SecondNextArrow = styled(Arrow)`
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    display: none;
  } ;
`;
