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
  &:hover:last-child {
    display: flex;
  }
`;

export const NavArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    hr {
      width: 1px;
      max-width: 1px;
      transition-duration: 0.7s;
      transform: scaleX(45);
    }
  }
`;

export const NavLink = styled(Link)`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${fontDefaultBold};
  text-decoration: none;
  color: white;
`;

export const NavLinkUnderline = styled.hr<{ isActive?: boolean }>`
  background-color: #099fff;
  height: 1px;
  width: ${({ isActive }) => (isActive ? "45px" : 0)};
  font-family: ${fontDefaultBold};
  text-decoration: none;
  border: none;
  margin: 0;
`;
