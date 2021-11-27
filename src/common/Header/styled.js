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

export const Search = styled.div`
    margin-left: auto;
    height: 48px;
    width: 432px;
    border-radius: 33px;
    border: 1px solid ${({ theme }) => theme.color.mystic};
    border-radius: 33px;
    background-color: white;
    display: flex;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    margin: 0 auto 16px;
    height: 44px;
    width: 284px;
    }; 
`;
export const Menu = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 32px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    margin-left: -32px;
    };
`;

export const MenuItem = styled.li`
    list-style: none;
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    padding: 0 32px;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    padding: 8px 12px;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    };
`;

export const MagnifierImage = styled.img`
    margin: 0px 16px 0px 24px;
    width: 24px;
    height: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    width: 16px;
    height: 16px;
    margin: 0px 8px 0px 16px;
    };
`;
export const Input = styled.input`
    color: ${({ theme }) => theme.color.waterloo};
    height: 24px;
    width: 155px;
    border: none;

    &:focus-visible {
    outline: none;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    font-weight: normal;
    font-size: 13px;
    line-height: 130%;
    };

`;