import {
    Wrapper,
    StyledHeader,
    TitleWrapper,
    PageTitle,
    Menu,
    MenuItem,
    CamerPicture,
} from "./styled";
import video from "./icons/video.svg";
import { StyledNavLink } from "../../GlobalStyle";
import { Search } from "./Search";

export const Header = () => {
    return (
        <Wrapper>
            <StyledHeader>
                <TitleWrapper>
                    <CamerPicture src={video} alt="camera" />
                    <PageTitle>movies browser</PageTitle>
                </TitleWrapper>
                <Menu>
                    <MenuItem>
                        <StyledNavLink to="/filmy">
                            movies
                        </StyledNavLink>
                    </MenuItem>
                    <MenuItem>
                        people
                    </MenuItem>
                </Menu>
                <Search />
            </StyledHeader>
        </Wrapper>
    );
};