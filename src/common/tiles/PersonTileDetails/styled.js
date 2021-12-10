import styled from "styled-components";

export const Container = styled.article`
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  gap: 40px;
  row-gap: 24px;
  margin: 56px 0 54px 0;
  background-color: ${({ theme }) => theme.color.white};
  padding: 40px;
  display: grid;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
    margin: 18px;
    padding: 18px;
    gap: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin: 16px;
    padding: 16px;
    gap: 16px;
    grid-template-columns: 116px 1fr;
    grid-template-rows: auto 1fr;
  }
`;
export const PhotoPerson = styled.img`
  display: block;
  height: 564px;
  grid-row: 1 /-1;
  grid-column: 1;
  border-radius: 5px;
  width: 399px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    height: auto;
    grid-row: 1;
    width: 116px;
  }
`;

export const PersonalData = styled.div`
  gap: 24px;
  grid-row: 1;
  grid-column: 2/-1;
  display: grid;
  grid-template-rows: auto 1fr;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
    gap: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    gap: 16px;
  }
`;
export const NameActor = styled.h1`
  font-size: 36px;
  margin-top: 8px;
  font-weight: 600;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
    font-size: 20px;
    margin-top: 6px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 14px;
    margin: 4px 0 0 0;
  }
`;
export const BirthInfo = styled.span`
  align-content: flex-start;
  gap: 8px;
  display: grid;
`;
export const Wrapper = styled.span`
  display: flex;
  flex-wrap: wrap;
  padding-right: 11px;
  color: ${({ theme }) => theme.color.stormgray};
  font-size: 18px;
  line-height: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    line-height: 14.4px;
    font-size: 12px;
  }

  &:first-child::before {
    content: "Date of the birth:";
    padding: 0 11px 0 0;
    font-size: 18px;
    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
      font-size: 16px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
      content: "Birth:";
      padding-right: 5px;
      font-size: 12px;
    }
  }
  &:nth-child(2)::before {
    content: "Place of the birth:";
    padding-right: 11px;
    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
      font-size: 16px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
      padding-right: 5px;
      font-size: 12px;
    }
  }
`;
export const BirthdayInfoDetail = styled.article`
  color: ${({ theme }) => theme.color.black};
`;
export const Biography = styled.span`
  grid-row: 2 /-1;
  grid-column: 2 / -1;
  font-size: 20px;
  line-height: 160%;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    line-height: 16.9px;
    grid-column: 1 / -1;
    font-size: 13px;
  }
`;
