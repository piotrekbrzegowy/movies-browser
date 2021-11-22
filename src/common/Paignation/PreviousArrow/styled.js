import styled, { css } from "styled-components";
import { ReactComponent as LeftArrow } from "./../graphics/vectorLeft.svg";

export const Arrow = styled(LeftArrow)`
  margin: 0 8px 0 0;
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
