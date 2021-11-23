import {
    Wrapper,
    StyledHeader,
    TitleWrapper,
    Search,
    PageTitle,
    Menu,
    MenuItem,
    MagnifierImage,
    CamerPicture,
    Input,
} from "./styled";
import search from "./icons/search.svg";
import video from "./icons/video.svg";
import { StyledNavLink } from "../../GlobalStyle";

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
                <Search>
                    <MagnifierImage src={search} alt='magnifier' />
                    <Input placeholder="Search for movies..." />
                </Search>
            </StyledHeader>
        </Wrapper>
    );
};