import styled from "styled-components";

export const TilesList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;

    @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}){
        gap: 16px;
    };
`;

