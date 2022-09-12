import styled from "styled-components";
import {
  fontDefaultBold,
  fontDefaultligther,
  fontDefaultLigth,
} from "../../../theme/text";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  min-height: 100vh;
  background-color: #2c3050;
  margin: 0;
  padding: 15px;
  color: #ffffff;

  a {
    color: #ffffff;
    text-decoration: none;
  }
`;

export const PeronalPhoto = styled.img`
  width: 250px;
  border-radius: 50%;
`;

export const ContainerTitle = styled.h1`
  font: ${fontDefaultBold};
  font-size: 20px;
`;

export const ContactsContainer = styled.div`
  padding: 5px;
  border-radius: 15px;
`;

export const ContactsContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 3px 0;
`;

export const ContentContainer = styled.div<{ hasAnimation?: boolean }>`
  padding: 5px;
  border-radius: 15px;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: ${({ hasAnimation }) =>
      hasAnimation ? "inset 260px 0 0 0 #fff" : " "};
    color: ${({ hasAnimation }) => (hasAnimation ? "#2c3050" : " ")};
    cursor: ${({ hasAnimation }) => (hasAnimation ? "pointer" : " ")};
  }
`;

export const ContentTitle = styled.h2`
  font: ${fontDefaultLigth};
  font-size: 17px;
`;

export const Content = styled.h3`
  font: ${fontDefaultligther};
  font-size: 15px;
  margin: 0;
  margin-left: 5px;
`;

export const SocialIconsContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
`;

export const SocialIconsButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
