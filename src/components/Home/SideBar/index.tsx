import React from "react";
import {
  ContactsContent,
  ContentTitle,
  Container,
  ContainerTitle,
  Content,
} from "./styles";

const SideBar = () => {
  return (
    <Container>
      <ContainerTitle>Contatos</ContainerTitle>

      <ContactsContent>
        <ContentTitle>Telefone: </ContentTitle>
        <Content>(16) 99325-6647</Content>
      </ContactsContent>

      <ContactsContent>
        <ContentTitle>Email: </ContentTitle>
        <Content>lucasdmandrade@gmail.com</Content>
      </ContactsContent>

      <ContactsContent>
        <ContentTitle>LinkeIn: </ContentTitle>
        <Content>
          <a href="https://www.linkedin.com/in/lucas-andrade-b319a0191?jobid=1234">
            linkedin/lucas-andrade
          </a>
        </Content>
      </ContactsContent>

      <ContainerTitle>Principais competências</ContainerTitle>

      <ContentTitle>React.js</ContentTitle>
      <ContentTitle>React Native</ContentTitle>
      <ContentTitle>JavaScript</ContentTitle>

      <ContainerTitle>Certificações</ContainerTitle>
      <ContentTitle>React.js</ContentTitle>
    </Container>
  );
};

export default SideBar;
