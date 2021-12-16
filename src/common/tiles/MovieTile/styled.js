import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled(Link)`
    width: 324px;
    min-height: 650px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;

    @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}){
        flex-direction: row;
        width: 100%;
        margin: 0 16px 0 16px;
        min-height: 201px;
    };
`;

export const NoImage = styled.img`
    width: 292px;
    height: 434px;
    background-color: ${({ theme }) => theme.color.silver};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        max-width: 114px;
        max-height: 169px;
    }
`;

export const Image = styled.img`
    max-width: 292px;
    height: 434px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        max-width: 114px;
        max-height: 169px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    margin-top: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        flex-direction: column;
        margin: 0 0 0 16px;
    };
`;

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Title = styled.header`
    font-weight: 500;
    font-size: 22px;
    color: ${({ theme }) => theme.color.woodsmoke};
    word-break: break-word;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        font-size: 16px;
    };
`;

export const Subtitle = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.color.waterloo};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        font-size: 13px;
    };
`;