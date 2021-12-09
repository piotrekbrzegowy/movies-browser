import styled from "styled-components";

export const Container = styled.article`
  margin: 56px 0 54px 0;
  background-color: ${({ theme }) => theme.color.white};
  padding: 40px;
  display: grid;
  gap: 40px;
  row-gap: 24px;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
`;
export const PhotoPerson = styled.img`
  float: left;
  display: block;
  width: 399px;
  height: 564px;
  grid-row: 1 /-1;
  grid-column: 1;
`;

export const Description = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 24px;
  grid-row: 1;
  grid-column: 2/-1;
`;
export const Title = styled.h1`
  font-weight: 600;
  font-size: 36px;
  margin: 8px 0 0 0;
`;
export const BirthInfo = styled.span`
  display: grid;
  align-content: flex-start;
  gap: 8px;
`;
export const Wrapper = styled.span`
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 18px;
  line-height: 24px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 11px 0 0;
  &:first-child::before {
    content: "Date of the birth:";
    padding: 0 11px 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
      content: "Birth:";
      padding: 0 4px 0 0;
    }
  }
  &:nth-child(2)::before {
    content: "Place of the birth:";
    padding: 0 11px 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
      padding: 0 4px 0 0;
    }
  }
`;
export const BirthdayInfoDetail = styled.article`
  color: ${({ theme }) => theme.color.black};
`;
export const Biography = styled.span`
  font-size: 20px;
  line-height: 160%;
  grid-row: 2 /-1;
  grid-column: 2 / -1;
`;
