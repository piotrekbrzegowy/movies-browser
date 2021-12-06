import { ErrorPageContainer, ErrorHeader, ErrorMessage, ErrorButton, ErrorIcon } from "./styled";

export const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <ErrorIcon />
      <ErrorHeader>Ooops! Something went wrong...</ErrorHeader>
      <ErrorMessage>
        Please check your network connection <br /> and try again
      </ErrorMessage>
      <ErrorButton to="/movies">Back to homepage</ErrorButton>
    </ErrorPageContainer>
  );
};
