import styled from "styled-components";

export const RatingWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 12px;
`;

export const Rate = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: ${({theme}) => theme.color.woodsmoke};
`;

export const Votes = styled.div`
    font-size: 16px;
    color: ${({theme}) => theme.color.waterloo};
`;