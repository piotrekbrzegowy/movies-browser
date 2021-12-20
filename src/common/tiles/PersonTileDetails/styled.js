import styled from "styled-components";

export const Container = styled.article`
    
    margin: 56px 0 54px 0;
    background-color: ${({ theme }) => theme.color.white};
    padding: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
        margin: 18px;
        padding: 18px;
        
    };

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin: 16px;
        padding: 16px;
        
    };
`;

export const Content = styled.span`

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        display: flex;
    };
`;

export const PersonPhoto = styled.img`
    display: block;
    height: 564px;
    border-radius: 5px;
    width: 399px;
    float: left;
    margin: 0 40px 20px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
        margin: 0 18px 0px 0;
    };

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        height: auto;
        width: 116px;
        margin: 0 16px 16px 0;
    };
`;

export const PersonalData = styled.div`
    gap: 24px;
    grid-row: 1;
    grid-column: 2/-1;
    display: grid;
    grid-template-rows: auto 1fr;

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
        gap: 18px;
    };
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        gap: 16px;
    };
`;

export const Header = styled.h1`
    font-size: 36px;
    margin-top: 8px;
    font-weight: 600;

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
        font-size: 20px;
        margin-top: 6px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 14px;
        margin: 4px 0 0 0;
    };
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
    };

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        line-height: 14.4px;
        font-size: 12px;
    };

    &:first-child::before {
      content: "Date of the birth:";
      padding: 0 11px 0 0;
      font-size: 18px;

      @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
          font-size: 16px;
      };

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
          content: "Birth:";
          padding-right: 5px;
          font-size: 12px;
      };
    } 

  &:nth-child(2)::before {
      content: "Place of the birth:";
      padding-right: 11px;

      @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
        font-size: 16px;
      };

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        padding-right: 5px;
        font-size: 12px;
      };
  };
`;

export const BirthdayInfoDetail = styled.article`
    color: ${({ theme }) => theme.color.black};
`;

export const Biography = styled.div`
    font-size: 20px;
    line-height: 160%;
    margin: 24px 0 0 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
        font-size: 18px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        line-height: 16.9px;
        font-size: 13px;
        margin: 0px;
    };
`;

export const NoImage = styled(PersonPhoto)`
    background-color: ${({ theme }) => theme.color.silver};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        height: 163px;
        width: 116px;
    };
`;