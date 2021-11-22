import styled from "styled-components";

export const Wrapper = styled.article`
    min-height: 544px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    padding: 40px;
    display: flex;

    @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
        min-height: 200px;
        margin: 0 16px;
        padding: 16px;
    };
`;

export const Image = styled.img`
    max-width: 312px;
    max-height: 464px;

    @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
        max-width: 114px;
        max-height: 169px;
    };
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 8px 0 0 40px;

    @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
        margin: 0 0 0 16px;
    };
`;

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        gap: 4px;
    }
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    color: ${({ theme }) => theme.color.black};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 16px;
    };
`;

export const Subtitle = styled.div`
    font-size: 22px;
    color: ${({ theme }) => theme.color.black};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 13px;
        color: ${({ theme }) => theme.color.waterloo};
    };
`;

export const MovieDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const MovieDetailsTitle = styled.div`
    font-size: 18px;
    color: ${({ theme }) => theme.color.stormgray};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        display: none;
    };
`;

export const MovieDetails = styled.div`
    font-size: 18px;
    color: ${({ theme }) => theme.color.black};
    display: flex;
    flex-direction: row;
    gap: 10px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 12px;
    };
`;

export const MovieDescription = styled.div`
    font-size: 20px;
    color: ${({ theme }) => theme.color.black};
    line-height: 160%;
    margin-top: 3px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 14px;
    };
`;