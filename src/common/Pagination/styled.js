import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 40px auto 103px;
  display: flex;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    /* margin-bottom: 32px; */
    margin: 32px auto 32px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`
  margin: 0 6px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.color.pattensblue};
  color: ${({ theme }) => theme.color.woodsmoke};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  &:disabled {
    background: ${({ theme }) => theme.color.mystic};
    color: ${({ theme }) => theme.color.woodsmoke};
    cursor: default;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
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
  color: ${({ theme }) => theme.color.waterloo};
  line-height: 24px;
  align-self: center;

  margin: 0px 8px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 10px;
    margin: 0 2px;
  }
`;
export const PaginationNumber = styled.span`
  color: ${({ theme }) => theme.color.woodsmoke};
  font-weight: 600;
  line-height: 24px;
  margin: 0px 8px;
  align-self: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 10px;
    margin: 0 2px;
  }
`;
