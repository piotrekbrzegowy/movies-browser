import styled from "styled-components";

export const Wrapper = styled.div`
    margin-left: auto;
    height: 48px;
    width: 432px;
    border-radius: 33px;
    border: 1px solid ${({ theme }) => theme.color.mystic};
    border-radius: 33px;
    background-color: white;
    display: flex;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mediumScreenMax}){
    margin: 0;
    height: 44px;
    width: 284px;
    };
`;

export const MagnifierImage = styled.img`
    margin: 0px 16px 0px 24px;
    width: 24px;
    height: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mediumScreenMax}){
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

    @media(max-width: ${({ theme }) => theme.breakpoint.mediumScreenMax}){
    font-weight: normal;
    font-size: 13px;
    line-height: 130%;
    };

`;