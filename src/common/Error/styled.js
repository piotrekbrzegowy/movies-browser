import styled from "styled-components";
import { Link } from "react-router-dom";

export const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 195px;
`;
export const ErrorHeader = styled.h1`
  margin-top: 38px;
  font-weight: 600;
  font-size: 36px;
  color: ${({ theme }) => theme.color.woodsmoke};
`;
export const ErrorMessage = styled.p`
  font-weight: 500;
  font-size: 22px;
  color: ${({ theme }) => theme.color.woodsmoke};
  margin: 24px auto;
`;
export const ErrorButton = styled(Link)`
  background-color: ${({ theme }) => theme.color.scienceblue};
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
  font-size: 14px;
  border-radius: 5px;
  text-decoration: none;
  border: none;
  padding: 16px 24px;
  margin-top: 24px;
`;
