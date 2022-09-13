import React from "react";
import PersonalPhoto from "../../../assets/personalPhoto.jpg";
import whatsappIcon from "../../../assets/whatsappIcon.svg";
import linkedinIcon from "../../../assets/linkedinIcon.svg";
import githubIcon from "../../../assets/githubIcon.svg";
import gmailIcon from "../../../assets/gmailIcon.svg";
import phoneIcon from "../../../assets/phoneIcon.svg";
import mailIcon from "../../../assets/mailIcon.svg";
import linkedInIcon2 from "../../../assets/linkedInIcon2.svg";

import {
  ContactsContent,
  ContentTitle,
  Container,
  ContainerTitle,
  Content,
  SocialIconsButton,
  SocialIconsContent,
  PeronalPhoto,
  ContentContainer,
} from "./styles";
import DivisorContainer from "../../../components/DivisorComponent";

const SideBar = () => {
  return (
    <Container>
      <PeronalPhoto src={PersonalPhoto} alt="Instagram Logo" />
      <DivisorContainer width="80%" justifyContent="center" />

      <ContentContainer>
        <ContainerTitle>Contatos</ContainerTitle>

        <ContactsContent>
          <img src={phoneIcon} alt="Icone de telefone" />
          <ContentTitle>Telefone: </ContentTitle>
          <Content>(16) 99325-6647</Content>
        </ContactsContent>

        <ContactsContent>
          <img src={mailIcon} alt="Icone de telefone" />
          <ContentTitle>Email: </ContentTitle>
          <Content>lucasdmandrade@gmail.com</Content>
        </ContactsContent>

        <ContactsContent>
          <img src={linkedInIcon2} alt="Icone de telefone" />
          <ContentTitle>LinkeIn: </ContentTitle>
          <Content>
            <a href="https://www.linkedin.com/in/lucas-andrade-b319a0191?jobid=1234">
              linkedin/lucas-andrade
            </a>
          </Content>
        </ContactsContent>
      </ContentContainer>

      <ContentContainer>
        <ContainerTitle>Principais competências</ContainerTitle>

        <ContentTitle>React.js</ContentTitle>
        <ContentTitle>React Native</ContentTitle>
        <ContentTitle>JavaScript</ContentTitle>
        <ContentTitle>Complience</ContentTitle>
      </ContentContainer>

      <ContentContainer
        hasAnimation
        onClick={() => {
          window.location.href =
            "https://github.com/lucasdmandrade/Certificados";
        }}
      >
        <ContainerTitle>Certificações</ContainerTitle>
        <ContentTitle>React.js</ContentTitle>
        <ContentTitle>Complience</ContentTitle>
        <ContentTitle>Power Bi</ContentTitle>
        <ContentTitle>Industria de games</ContentTitle>
      </ContentContainer>

      <ContentContainer>
        <ContainerTitle>Redes sociais</ContainerTitle>
        <SocialIconsContent>
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
      </ContentContainer>
    </Container>
  );
};

export default SideBar;
