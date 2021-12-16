import { Wrapper } from "./styled";

const Container = ({ children, person }) => <Wrapper person={person}>{children}</Wrapper>;

export default Container;
