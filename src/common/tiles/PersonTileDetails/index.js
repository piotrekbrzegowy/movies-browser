import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchPerson, selectPerson } from "../../../features/PersonPage/personSlice";
import { getPosterURLpath } from "../../apiConfiguration";
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
  const { id } = useParams();
  const { profile_path, name, birthday, place_of_birth, biography } = useSelector(selectPerson);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchPerson({ id })), [dispatch, id]);
  return (
    <Container>
      <PhotoPerson src={getPosterURLpath(profile_path)} alt="" />
      <Description>
        <Title>{name}</Title>
        <BirthInfo>
          <Wrapper>
            <BirthdayInfoDetail>{birthday}</BirthdayInfoDetail>
          </Wrapper>
          <Wrapper>
            <BirthdayInfoDetail>{place_of_birth}</BirthdayInfoDetail>
          </Wrapper>
        </BirthInfo>
      </Description>
      <Biography>{biography}</Biography>
    </Container>
  );
};
