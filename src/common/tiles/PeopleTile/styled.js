import styled from "styled-components";
import { Image, Title, Wrapper } from "../MovieTile/styled";

export const Container = styled(Wrapper)`
    width: 208px;
    min-height: 339px;
    padding-bottom: 22px;
    
@media(max-width:${({ theme }) => theme.breakpoint.mobileMax}){
    flex-direction: column;
    max-width: 136px;
    min-height: 245px;
    padding: 16px;
}
`;

export const Picture  = styled(Image)`
    max-width: 176px;
    max-height: 264px;
    border-radius: 5px;

    @media(max-width:${({ theme }) => theme.breakpoint.tabletMax}){
    max-width: 120px;
    max-height: 178px;
}
`;

export const Header = styled(Title)`
    margin: auto;
    margin-bottom: 22px;

    @media(max-width:${({ theme }) => theme.breakpoint.tabletMax}){
    margin-bottom: 0px;
    font-size: 14px;
    line-height: 130%;
}
`;