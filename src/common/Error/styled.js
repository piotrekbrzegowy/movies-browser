import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as DangerIcon } from "./images/danger.svg";

export const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin: 50px auto;
  }
`;

export const ErrorIcon = styled(DangerIcon)`
  margin-top: 195px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin-top: 50px;
  }
`;
export const ErrorHeader = styled.h1`
  margin-top: 38px;
  margin-bottom: 0px;
  font-weight: 600;
  font-size: 36px;
  color: ${({ theme }) => theme.color.woodsmoke};
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
    font-size: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 22px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}) {
    font-size: 20px;
  }
`;
export const ErrorMessage = styled.p`
  font-weight: 500;
  font-size: 22px;
  color: ${({ theme }) => theme.color.woodsmoke};
  margin: 24px auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}) {
    font-size: 14px;
  }
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
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 14px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
    font-size: 18px;
  }
  &:hover {
    filter: brightness(80%);
  }
`;
