import {
  Container,
  PhotoPerson,
  Title,
  Description,
  BirthInfo,
  Wrapper,
  BirthdayInfoDetail,
  Biography,
} from "./styled";

export const PersonTileDetails = () => {
  return (
    <Container>
      <PhotoPerson />
      <Description>
        <Title>Actor Name</Title>
        <BirthInfo>
          <Wrapper>
            <BirthdayInfoDetail>20.03. 1990</BirthdayInfoDetail>
          </Wrapper>
          <Wrapper>
            <BirthdayInfoDetail>Dallas, Texas, USA</BirthdayInfoDetail>
          </Wrapper>
        </BirthInfo>
      </Description>
      <Biography>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Biography>
    </Container>
  );
};
