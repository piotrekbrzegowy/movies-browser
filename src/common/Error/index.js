import { ReactComponent as DangerIcon } from "./images/danger.svg";
import { ErrorPageContainer } from "./styled";

export const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <DangerIcon />
    </ErrorPageContainer>
  );
};
