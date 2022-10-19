import styled from "styled-components";
import { Link } from "react-router-dom";
import { fontDefaultBold } from "../../theme/text";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  display: flex;
  background-color: #1d1d1f;
  opacity: 0.95;
  justify-content: center;
  z-index: 999;
`;

export const NavLink = styled(Link)`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${fontDefaultBold};
  text-decoration: none;
  color: white;
`;
