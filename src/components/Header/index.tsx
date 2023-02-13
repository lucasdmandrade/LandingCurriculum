import DivisorComponent from "../DivisorComponent";
import { Container, NavArea, NavLink, NavLinkUnderline } from "./styles";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <Container>
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
        <NavLink to="/professional">Profissional</NavLink>
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
        <NavLink to="/emulador">Emulador</NavLink>
        <NavLinkUnderline isActive={location.pathname === "/emulador"} />
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
        <NavLink to="/curriculum">Currículo</NavLink>
        <NavLinkUnderline isActive={location.pathname === "/curriculum"} />
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
    </Container>
  );
};

export default Header;
