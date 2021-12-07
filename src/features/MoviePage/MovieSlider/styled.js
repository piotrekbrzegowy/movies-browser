import styled from "styled-components";

export const SliderBackground = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.color.black};
`;

export const MovieSliderWrapper = styled.div`
    max-width: 1368px;
    max-height: 770px;
    margin: auto;
    position: relative;
`;

export const MovieBackdrop = styled.img`
    display: block;
    width: 100%;
`;

export const MovieDetailsWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(270deg, #000000 14.11%, rgba(0, 0, 0, 0.873268) 15.08%, rgba(0, 0, 0, 0.720529) 16.51%, rgba(0, 0, 0, 0.294577) 19.99%, rgba(0, 0, 0, 0.159921) 21.88%, rgba(0, 0, 0, 0) 25.68%), linear-gradient(90deg, #000000 13.6%, rgba(0, 0, 0, 0.984059) 14.58%, rgba(0, 0, 0, 0.967732) 15.44%, rgba(0, 0, 0, 0.865569) 16.3%, rgba(0, 0, 0, 0.230315) 22.87%, rgba(0, 0, 0, 0) 26.64%), linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.689555) 4.66%, rgba(0, 0, 0, 0.439033) 9.34%, rgba(0, 0, 0, 0.20628) 15.16%, rgba(0, 0, 0, 0) 24.22%), linear-gradient(189.44deg, rgba(0, 0, 0, 0) 58.48%, rgba(0, 0, 0, 0.106473) 63.17%, rgba(0, 0, 0, 0.235359) 68.85%, rgba(0, 0, 0, 0.492821) 78.08%, rgba(0, 0, 0, 0.740286) 85.86%, #000000 92.87%);
    background-position: center;
    background-size: 140%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const Title = styled.h1`
    font-size: 64px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.white};
    margin: 0 0 25px 16px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        font-size: 24px;
        margin: 0 0 5px 16px;
    };
`;