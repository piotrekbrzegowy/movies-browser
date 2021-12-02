import styled from "styled-components";

export const RatingWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 12px;
    margin-top: 10px;
`;

export const Rate = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: ${({ theme }) => theme.color.woodsmoke};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        font-size: 13px;
    };
`;

export const Votes = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.color.waterloo};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        font-size: 13px;
    };
`;

export const StarIcon = styled.img`
    width: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        width: 16px;
    };
`;