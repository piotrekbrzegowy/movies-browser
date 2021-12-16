import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: auto;

  ${( props ) =>
    props.person &&
    css`
      margin-bottom: 220px;
    `}
`;
