import React from "react";
import InstagramIcon from "../../../assets/instagramIcon.svg";
import whatsappIcon from "../../../assets/whatsappIcon.svg";
import linkedinIcon from "../../../assets/linkedinIcon.svg";
import githubIcon from "../../../assets/githubIcon.svg";
import gmailIcon from "../../../assets/gmailIcon.svg";

import {
  ContactsContent,
  ContentTitle,
  Container,
  ContainerTitle,
  Content,
  SocialIconsButton,
  SocialIconsContent,
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

      <ContainerTitle>Redes sociais</ContainerTitle>
      <SocialIconsContent>
        <SocialIconsButton
          onClick={() => {
            window.location.href = "https://www.instagram.com/lucasdmandrade/";
          }}
        >
          <img src={InstagramIcon} alt="Instagram Logo" />
        </SocialIconsButton>

        <SocialIconsButton
          onClick={() => {
            window.location.href =
              "https://api.whatsapp.com/send?phone=5516993256647";
          }}
        >
          <img src={whatsappIcon} alt="WhatsApp Logo" />
        </SocialIconsButton>

        <SocialIconsButton
          onClick={() => {
            window.location.href =
              "https://www.linkedin.com/in/lucas-andrade-b319a0191?jobid=1234";
          }}
        >
          <img src={linkedinIcon} alt="linkedIn Logo" />
        </SocialIconsButton>
        <SocialIconsButton
          onClick={() => {
            window.location.href = "https://github.com/lucasdmandrade";
          }}
        >
          <img src={githubIcon} alt="GitHub Logo" />
        </SocialIconsButton>
        <SocialIconsButton
          onClick={() => {
            window.location.href = "mailto:lucadmandrade@gmail.com";
          }}
        >
          <img src={gmailIcon} alt="Gmail Logo" />
        </SocialIconsButton>
      </SocialIconsContent>
    </Container>
  );
};

export default SideBar;
