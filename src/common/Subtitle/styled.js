import styled from "styled-components";

export const Title = styled.h2` 
    height: 43px;
    margin: 56px 0px 24px;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    color: ${({ theme }) => theme.color.woodsmoke};
    text-transform: capitalize;

@media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    height: 22px;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    margin: 24px 0px 12px 16px;
    };
`;