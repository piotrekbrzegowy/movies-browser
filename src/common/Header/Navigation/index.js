import { StyledNavLink } from "../../../GlobalStyle";
import { Menu, MenuItem } from "./styled";

export const Navigation = () => {

    return (
        <Menu>
            <MenuItem>
                <StyledNavLink to="/movies">
                    movies
                </StyledNavLink>
            </MenuItem>
            <MenuItem>
                <StyledNavLink to="/people">
                    people
                </StyledNavLink>
            </MenuItem>
        </Menu>
    )
};