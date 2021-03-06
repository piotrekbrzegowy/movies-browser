import styled from "styled-components";

export const Menu = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 32px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}){
    gap: 10%;
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

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}){
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    padding: 0;
    };
`;