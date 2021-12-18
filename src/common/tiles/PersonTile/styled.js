import styled from "styled-components";
import { Content, Image, Wrapper } from "../../../common/tiles/MovieTile/styled";

export const Container = styled(Wrapper)`
    width: 208px;
    min-height: 339px;
    padding-bottom: 22px;
    margin: 0;
    
    @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}){
        flex-direction: column;
        max-width: 136px;
        min-height: 245px;
        padding: 8px 8px 16px 8px;
    };
`;

export const Picture = styled(Image)`
    max-width: 100%;
    max-height: 264px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.silver};

    @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}){
        max-width: 120px;
        max-height: 178px;
    };
`;

export const Header = styled.h3`
    margin: auto;
    margin-bottom: 22px;

    @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}){
        padding: 0px;
        margin-bottom: 0px;
        font-size: 14px;
        line-height: 130%;
        margin-left: -16px;
    };
`;

export const ContentPeopleTile = styled(Content)`
    @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}){
        margin: 8px 0px 0px;
        text-align: center;
    };   
`;

export const Subtitle = styled.div`
    font-size: 18px;
    color: ${({ theme }) => theme.color.waterloo};
    margin: 8px 0 0 0;
    text-align: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        font-size: 13px;
    };
`;

export const Title = styled.header`
    font-weight: 500;
    font-size: 22px;
    color: ${({ theme }) => theme.color.woodsmoke};
    word-break: break-word;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 14px;
    };
`;