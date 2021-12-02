import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.color.woodsmoke};
    height: 94px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    height: 142px;
    };
`;

export const StyledHeader = styled.header`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1368px;
    height: 94px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    height: 142px;
    };
`;

export const TitleWrapper = styled.div`
    align-self: flex-start;
    height: 94px;
    display: flex;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    width: 120px;
    height: 17px;
    margin: 32px 16px;
    };
`;

export const PageTitle = styled.h1`
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -1,5px;
    color: ${({ theme }) => theme.color.white};
    padding-left: 16px;
    text-transform: capitalize;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    height: 17px;
    width: 95px;
    padding-left: 0;
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;
    letter-spacing: -0.5px;
    };
`;

export const CamerPicture = styled.img`
    width: 40px;
    height: 40px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    width: 17px;
    height: 17px;
    margin-right: 8px;
    };
`;