import styled from "styled-components";

export const TagList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

export const Tag = styled.li`
    font-size: 14px;
    background-color: ${({theme}) => theme.color.mystic};
    padding: 8px 16px;
    border-radius: 5px;
`;