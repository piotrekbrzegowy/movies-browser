import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #18181B;
    height: 94px;
`;

export const StyledHeader = styled.header`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1368px;
    background-color: #18181B;
    height: 94px;
`;

export const TittleWrapper = styled.div`
    align-self: flex-start;
    height: 94px;
    display: flex;
    align-items: center;
`;

export const PageTittle = styled.h1`
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -1,5px;
    color: #FFFFFF;
    padding-left: 16px;
    text-transform: capitalize;
`;

export const Search = styled.div`
    margin-left: auto;
    height: 48px;
    width: 432px;
    border-radius: 33px;
    border: 1px solid #E4E6F0;
    border-radius: 33px;
    background-color: white;
    display: flex;
    align-items: center;
`;
export const Menu = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 32px;
`;

export const MenuItem = styled.li`
    list-style: none;
    text-decoration: none;
    color: white;
    padding: 0 32px;

    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
`;

export const Img = styled.img`
    margin: 0px 16px 0px 24px;
    width: 24px;
    height: 24px;
`;
export const Input = styled.input`
    color: #7E839A;
    height: 24px;
    width: 155px;
    border: none;

&:focus-visible {
    outline: none;
};
`;