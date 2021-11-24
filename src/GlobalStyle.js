import { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  background-color: ${({ theme }) => theme.color.mercury};
  font-family: 'Poppins', sans-serif;
}
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: white;
    
    &.active {
      border: 1px solid ${({ theme }) => theme.color.white};
      border-radius: 24px;
      padding: 8px 12px;
    };
`;
