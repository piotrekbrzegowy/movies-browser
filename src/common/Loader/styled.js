import styled from "styled-components";

export const SpinnerContainer = styled.div`
    max-width: 1368px;
    min-height: calc(100vh - 94px);
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}){
        min-height: calc(100vh - 142px);
    }
`;

export const Spinner = styled.img`
    width: 91px;
    height: 91px;
    transform: rotate(360deg);
    animation: spin;
    animation-duration: 1.25s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
        width: 35px;
        height: 35px;
    }

    @keyframes spin {
        from {
            transform: unset;
        } to {
            transform: translateX(360deg);
        }
    }
`;