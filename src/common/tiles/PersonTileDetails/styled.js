import styled from "styled-components";

export const Container = styled.article`
  margin: 56px 0 54px 0;
  background-color: ${({ theme }) => theme.color.white};
  padding: 40px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  gap: 40px;
  row-gap: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    grid-template-columns: 116px 1fr;
    grid-template-rows: auto 1fr;
    margin: 16px;
    padding: 16px;
    gap: 16px;
  }
`;
export const PhotoPerson = styled.img`
  display: block;
  border-radius: 5px;
  width: 399px;
  height: 564px;
  grid-row: 1 /-1;
  grid-column: 1;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 116px;
    height: auto;
    grid-row: 1;
  }
`;

export const PersonalData = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 24px;
  grid-row: 1;
  grid-column: 2/-1;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    gap: 16px;
  }
`;
export const NameActor = styled.h1`
  font-weight: 600;
  font-size: 36px;
  margin-top: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 14px;
    margin: 4px 0 0 0;
  }
`;
export const BirthInfo = styled.span`
  display: grid;
  align-content: flex-start;
  gap: 8px;
`;
export const Wrapper = styled.span`
  color: ${({ theme }) => theme.color.stormgray};
  font-size: 18px;
  line-height: 24px;
  display: flex;
  flex-wrap: wrap;
  padding-right: 11px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 12px;
    line-height: 14.4px;
  }
  &:first-child::before {
    content: "Date of the birth:";
    padding: 0 11px 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
      content: "Birth:";
      padding-right: 11px;
    }
  }
  &:nth-child(2)::before {
    content: "Place of the birth:";
    padding-right: 11px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
      padding-right: 11px;
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
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 13px;
    line-height: 16.9px;
    grid-column: 1 / -1;
  }
`;
