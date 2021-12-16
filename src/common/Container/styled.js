import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: auto;
  ${({ person }) =>
    person &&
    css`
      margin-bottom: 220px;
    `}
`;
