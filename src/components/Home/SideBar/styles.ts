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
  font-size: 20px;
  font: ${fontDefaultBold};
`;

export const ContactsContainer = styled.div`
  display: flex;
`;

export const ContactsContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 3px 0;
`;

export const ContentContainer = styled.div`
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const ContentTitle = styled.h2`
  font-size: 17px;
  margin: 0;
  font: ${fontDefaultLigth};
`;

export const Content = styled.h3`
  font-size: 15px;
  margin: 0;
  margin-left: 5px;
`;

export const SocialIconsContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 80%;
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
