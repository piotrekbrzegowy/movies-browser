import styled, { css } from "styled-components";

export const RatingWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 12px;
    margin-top: 10px;

    ${(props) => props.moviePage && css`
        margin: 0 0 56px 16px;
        flex-direction: column;
        align-items: flex-start;
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        ${(props) => props.moviePage && css`
            margin: 0 0 16px 16px;
            flex-direction: unset;
            align-items: flex-end;
        `}
    };
`;

export const Rate = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: ${({ theme }) => theme.color.woodsmoke};

    ${(props) => props.moviePage && css`
        color: ${({ theme }) => theme.color.white};
        font-size: 30px;
        font-weight: 500;
    `}

    ${(props) => props.moviePageDetails && css`
        font-size: 22px;
        font-weight: 500;
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        font-size: 13px;

        ${(props) => props.moviePage && css`
            font-size: 14px;
        `}
    };
`;

export const RateSpan = styled.span`
    font-size: 16px;
    font-weight: 400;

    ${(props) => props.moviePageDetails && css`
        font-size: 14px;
    `}
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        font-size: 10px;
    };
`;

export const Votes = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.color.waterloo};

    ${(props) => props.moviePage && css`
        color: ${({ theme }) => theme.color.white};
    `}

    ${(props) => props.moviePageDetails && css`
        font-size: 14px;
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        font-size: 13px;

        ${(props) => props.moviePage && css`
            font-size: 10px;
    `}
    };
`;

export const StarIcon = styled.img`
    width: 24px;

    ${(props) => props.moviePage && css`
        width: 40px;
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        width: 16px;
    };
`;

export const RateDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: flex-end;

    ${(props) => props.moviePage && css`
        gap: 8px;
    `}
`;