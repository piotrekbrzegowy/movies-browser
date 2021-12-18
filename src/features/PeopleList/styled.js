import styled from "styled-components";
import { TilesList } from "../../common/TilesList";

export const PeopleTilesList = styled(TilesList)`
    @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}){
        gap: 16px;
};
`