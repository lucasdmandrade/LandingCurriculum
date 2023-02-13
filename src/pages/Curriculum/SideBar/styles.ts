import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  min-height: 100vh;
  background-color: #2c3050;
  margin: 0;
  padding: 15px;
  color: #ffffff;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;

  a {
    color: #ffffff;
    text-decoration: none;
  }
`;

export const PeronalPhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PeronalPhoto = styled.img`
  width: 250px;
  border-radius: 50%;
`;

export const ContainerTitle = styled.h1`
  font-size: 1.2em;
`;

export const ContactsContainer = styled.div`
  padding: 5px;
  border-radius: 15px;
`;

export const ContactsContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 3px 0;
`;

export const ContentContainer = styled.div<{ hasAnimation?: boolean }>`
  padding: 5px;
  margin-top: 10px;
  border-radius: 15px;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: ${({ hasAnimation }) =>
      hasAnimation ? "inset 300px 0 #fff" : "none"};
    color: ${({ hasAnimation }) => (hasAnimation ? "#2c3050" : "none")};
    cursor: ${({ hasAnimation }) => (hasAnimation ? "pointer" : "")};
  }
`;

export const ContentTitle = styled.h2`
  font-size: 17px;
  margin-left: 5px;
`;

export const Content = styled.h3`
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

  border: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
