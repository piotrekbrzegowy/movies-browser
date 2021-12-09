import styled from "styled-components";

export const Container = styled.article`
  margin: 56px 0 54px 0;
  background-color: ${({ theme }) => theme.color.white};
  padding: 40px;
  display: grid;
  gap: 40px;
  row-gap: 24px;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
`;
export const PhotoPerson = styled.img`
  float: left;
  display: block;
  width: 399px;
  height: 564px;
  background-color: green;
`;
