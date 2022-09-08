import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
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
  font-weight: 400;
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

export const ContentTitle = styled.h2`
  font-size: 17px;
  font-weight: lighter;
  margin: 0;
`;

export const Content = styled.h3`
  font-size: 15px;
  font-weight: 300;
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
