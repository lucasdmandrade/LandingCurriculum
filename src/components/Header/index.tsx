import { Link } from "react-router-dom";
import DivisorComponent from "../DivisorComponent";
import { Container, NavLink } from "./styles";

const Header = () => {
  return (
    <Container>
      <NavLink to="/professional">Proficional</NavLink>
      <DivisorComponent
        width="1px"
        height="70%"
        removeMargin
        backgroundColor="white"
        color="transparent"
        justifyContent="center"
        removeBorder
      />
      <NavLink to="/">Home</NavLink>
      <DivisorComponent
        width="1px"
        height="70%"
        removeMargin
        backgroundColor="white"
        color="transparent"
        justifyContent="center"
        removeBorder
      />
      <NavLink to="/curriculum">Curriculo</NavLink>
    </Container>
  );
};

export default Header;