import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchPerson, selectPerson } from "../../../features/PersonPage/personSlice";
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
} from "./styled";

export const PersonTileDetails = () => {
  const { id } = useParams();
  const { profile_path, name, birthday, place_of_birth, biography } = useSelector(selectPerson);

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchPerson({ id })), [dispatch, id]);
  return (
    <Container>
      <PersonPhoto src={getPosterUrl(profile_path)} />
      <PersonalData>
        <Header>{name}</Header>
        <BirthInfo>
          <Wrapper>
            <BirthdayInfoDetail>
              {birthday &&
                `${birthday.slice(8, 10)}.${birthday.slice(5, 7)}.
          ${birthday.slice(0, 4)}`}
            </BirthdayInfoDetail>
          </Wrapper>
          <Wrapper>
            <BirthdayInfoDetail>{place_of_birth}</BirthdayInfoDetail>
          </Wrapper>
        </BirthInfo>
      </PersonalData>
      <Biography>{biography}</Biography>
    </Container>
  );
};
