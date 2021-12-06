import { ReactComponent as DangerIcon } from "./images/danger.svg";
import { ErrorPageContainer, ErrorHeader, ErrorMessage, ErrorButton } from "./styled";

export const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <DangerIcon />
      <ErrorHeader>Ooops! Something went wrong...</ErrorHeader>
      <ErrorMessage>
        Please check your network connection <br /> and try again
      </ErrorMessage>
      <ErrorButton to="/movies">Back to homepage</ErrorButton>
    </ErrorPageContainer>
  );
};
