import styled from "styled-components";

export const Wrapper = styled.article`
    width: 324px;
    min-height: 650px;
    background-color: #FFF;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    padding: 16px;
    display: flex;
    flex-direction: column;
`;

export const Image = styled.img`
    max-width: 292px;
    max-height: 434px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    margin-top: 16px;
`;

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Title = styled.header`
    font-weight: 500;
    font-size: 22px;
    color: #18181B;
`;

export const Subtitle = styled.div`
    font-size: 16px;
    color: #7E839A;
`;
