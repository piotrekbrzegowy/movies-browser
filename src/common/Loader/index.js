import spinner from "./images/spinner.svg";
import { SpinnerContainer, Spinner } from "./styled";

export const Loader = () => {
    return (
        <SpinnerContainer>
            <Spinner src={spinner} />
        </SpinnerContainer>)
};