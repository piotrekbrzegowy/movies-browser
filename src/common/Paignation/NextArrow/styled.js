import styled, { css } from "styled-components";
import { ReactComponent as RightArrow } from "./../graphics/vectorRight.svg";

export const Arrow = styled(RightArrow)`
  margin: 0 0 0 8px;
  height: 11px;
  width: 7px;
  color: ${({ theme }) => theme.colors.scienceblue};
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.colors.waterloo};
    `}
`;
