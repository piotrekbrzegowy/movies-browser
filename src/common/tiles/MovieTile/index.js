import poster from "./images/poster.jpg";
import { Wrapper, Image, Content, DetailsWrapper, Title } from "./styled";


export function MovieTile({ title}) {
    return (
        <Wrapper>
            <Image src={poster} alt="poster description" />
            <Content>
                <DetailsWrapper>
                    <Title>{title}</Title>
                </DetailsWrapper>
                
            </Content>
        </Wrapper>
    );
};
