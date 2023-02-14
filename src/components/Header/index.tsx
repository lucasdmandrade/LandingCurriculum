import DivisorComponent from "../DivisorComponent";
import { Container, NavArea, NavLink, NavLinkUnderline } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
      <NavArea onClick={() => navigate("/")}>
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
      <NavArea onClick={() => navigate("/professional")}>
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

      <NavArea onClick={() => navigate("/emulador")}>
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

      <NavArea onClick={() => navigate("/curriculum")}>
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
