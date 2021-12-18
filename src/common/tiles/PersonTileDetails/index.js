import { useSelector } from "react-redux";
import { selectPerson } from "../../../features/PersonPage/personSlice";
import { getPosterUrl } from "../../apiConfiguration";
import {
  Container,
  PersonPhoto,
  Header,
  PersonalData,
  BirthInfo,
  Wrapper,
  BirthdayInfoDetail,
  Biography,
  NoImage,
} from "./styled";
import emptyPoster from "../../../assets/emptyPoster.svg";

export const PersonTileDetails = () => {
  const { profile_path, name, birthday, place_of_birth, biography } = useSelector(selectPerson);

  return (
    <Container>
      {profile_path ? (
                    <PersonPhoto src={getPosterUrl(profile_path)} alt={`${name} poster`}/>
                ) : (
                    <NoImage src={emptyPoster} />
                )}
      <PersonalData>
        <Header>{name}</Header>
        <BirthInfo>
          {birthday && <Wrapper>
            <BirthdayInfoDetail>
              {birthday &&
                `${birthday.slice(8, 10)}.${birthday.slice(5, 7)}.
          ${birthday.slice(0, 4)}`}
            </BirthdayInfoDetail>
          </Wrapper>}
          {place_of_birth && <Wrapper>
            <BirthdayInfoDetail>{place_of_birth}</BirthdayInfoDetail>
          </Wrapper>}
        </BirthInfo>
      </PersonalData>
      <Biography>{biography}</Biography>
    </Container>
  );
};
