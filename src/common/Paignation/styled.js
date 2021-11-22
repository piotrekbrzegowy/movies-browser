import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 40px auto 103px;
  display: gird;
  grid-template-columns: auto;
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
`;
export const PaginationText = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.waterloo};
  line-height: 24px;
  align-items: center;
  margin: 0px 8px;
`;
export const PaginationNumber = styled.span`
  color: ${({ theme }) => theme.colors.woodsmoke};
  font-weight: 600;
  line-height: 24px;
  margin: 0px 8px;
  align-self: center;
`;
