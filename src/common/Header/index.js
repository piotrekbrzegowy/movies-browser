import {
    Wrapper,
    StyledHeader,
    TittleWrapper,
    Search,
    SearchWrapper,
    PageTittle,
    Menu,
    MenuItem,
    SearchIcon,
    Img,
    Input,
} from "./styled";

export const Header = () => {
    return (
        <Wrapper>
            <StyledHeader>
                <TittleWrapper>

                        <img src='https://i.postimg.cc/pdVjVLc2/Video.png' alt="camera picture" />
                 
                    <PageTittle>Movies Browser</PageTittle>
                </TittleWrapper>
                <Menu>
                    <MenuItem>
                        movies
                    </MenuItem>
                    <MenuItem>
                        people
                    </MenuItem>
                </Menu>
                <SearchWrapper>
                    <Search>
                        <SearchIcon><Img src='https://i.postimg.cc/rytqwB4R/Search.png' alt='magnifier' /></SearchIcon>
                        <Input placeholder="Search for movies..." />
                    </Search>
                </SearchWrapper>
            </StyledHeader>
        </Wrapper>
    )
};