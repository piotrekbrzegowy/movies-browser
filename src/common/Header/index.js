import {
    Wrapper,
    StyledHeader,
    TittleWrapper,
    Search,
    PageTittle,
    Menu,
    MenuItem,
    Img,
    Input,
} from "./styled";

export const Header = () => {
    return (
        <Wrapper>
            <StyledHeader>
                <TittleWrapper>
                    <img src='https://i.postimg.cc/pdVjVLc2/Video.png' alt="camera" />
                    <PageTittle>movies browser</PageTittle>
                </TittleWrapper>
                <Menu>
                    <MenuItem>
                        movies
                    </MenuItem>
                    <MenuItem>
                        people
                    </MenuItem>
                </Menu>
                    <Search>
                        <Img src='https://i.postimg.cc/rytqwB4R/Search.png' alt='magnifier' />
                        <Input placeholder="Search for movies..." />
                    </Search>
            </StyledHeader>
        </Wrapper>
    )
};