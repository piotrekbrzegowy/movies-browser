import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 40px auto 103px;
  display: gird;
  grid-template-columns: auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin-bottom: 32px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`
  margin: 0 6px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.pattensblue};
  color: ${({ theme }) => theme.colors.woodsmoke};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  &:disabled {
    background: ${({ theme }) => theme.colors.mystic};
    color: ${({ theme }) => theme.colors.woodsmoke};
    cursor: default;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: 8px 12px;
    margin: 0px 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
export const PaginationText = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.waterloo};
  line-height: 24px;
  align-self: center;

  margin: 0px 8px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 10px;
    margin: 0 2px;
  }
`;
export const PaginationNumber = styled.span`
  color: ${({ theme }) => theme.colors.woodsmoke};
  font-weight: 600;
  line-height: 24px;
  margin: 0px 8px;
  align-self: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 10px;
    margin: 0 2px;
  }
`;
