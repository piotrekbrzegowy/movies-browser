import styled from "styled-components";
import { Image, Title, Wrapper } from "../MovieTile/styled";

export const Container = styled(Wrapper)`
    max-width: 208px;
    min-height: 339px;
    padding-bottom: 22px;
`;

export const Picture  = styled(Image)`
    max-width: 176px;
    max-height: 264px;
    border-radius: 5px;
`;

export const Header = styled(Title)`
    min-height: 58px;
    margin: auto;
    margin-bottom: 22px;
`;