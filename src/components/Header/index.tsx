import { Link } from "react-router-dom";
import DivisorComponent from "../DivisorComponent";
import { Container, NavArea, NavLink, NavLinkUnderline } from "./styles";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <Container>
      <NavArea>
        <NavLink to="/professional">Proficional</NavLink>
        <NavLinkUnderline isActive={location.pathname === "/professional"} />
      </NavArea>
      <DivisorComponent
        width="1px"
        height="70%"
        removeMargin
        backgroundColor="white"
        color="transparent"
        justifyContent="center"
        removeBorder
      />
      <NavArea>
        <NavLink to="/">Home</NavLink>
        <NavLinkUnderline isActive={location.pathname === "/"} />
      </NavArea>

      <DivisorComponent
        width="1px"
        height="70%"
        removeMargin
        backgroundColor="white"
        color="transparent"
        justifyContent="center"
        removeBorder
      />
      <NavArea>
        <NavLink to="/curriculum">Curriculo</NavLink>
        <NavLinkUnderline isActive={location.pathname === "/curriculum"} />
      </NavArea>
    </Container>
  );
};

export default Header;
