import React from "react";
import MainContainer from "../../components/MainContainer";
import {
  BeBold,
  Container,
  ImageContainer,
  ImageContent,
  TextActivities,
  TextContainer,
  TextContent,
  TextRole,
} from "./styles";
import Seedz from "../../assets/images/logoSeedz.png";
import Q2bank from "../../assets/images/q2bank.png";
import CloudMed from "../../assets/images/cloudmed.png";
import Tenda from "../../assets/images/tenda.png";
import Fatec from "../../assets/images/fatec.png";

const Professional = () => (
  <MainContainer>
    <Container>
      <ImageContainer>
        <ImageContent src={Seedz} alt="Logo da Seedz" />
      </ImageContainer>
      <TextContainer>
        <TextRole>Desenvolvedor Mobile - Pleno</TextRole>
        <TextActivities>
          <BeBold>Linguagens/Frameworks:</BeBold> React Native, TypeScript.
        </TextActivities>
        <TextContent>
          Trabalhei na reestruturação e replanejamento do aplicativo Seedz Farm,
          um aplicativo voltado a criar um ambiente que engaje os produtores
          rurais a se inserirem no meio digital. Para isso o aplicatico conta
          com previsões de clima, acompanhamento de cotações, de noticias e uma
          rede social para conectar produtores rurais. Nesse projeto exerci as
          atividades de desenvolvimento do frontend, deploy, criação de testes
          automatizados, criação de testes end to end, discovery de novas
          tecnologias e planejamento da arquitetura do sistema.
        </TextContent>
      </TextContainer>
    </Container>
    <Container>
      <ImageContainer>
        <ImageContent src={Q2bank} alt="Imagem do app q2bank" />
      </ImageContainer>
      <TextContainer>
        <TextRole>Desenvolvedor Mobile</TextRole>
        <TextActivities>
          <BeBold>Linguagens/Frameworks:</BeBold> React Native, TypeScript,
          React, Next, HTML, CSS, JavaScript.
        </TextActivities>
        <TextContent>
          Trabalhei no desenvolvimento do aplicativo Q2 Bank, um banco digital
          voltado para os credenciados da Q2 terem maior controle das suas POS.
          Exercendo as atividades de desenvolvimento do frontend, deploy,
          criação de testes automatizados, criação de testes end to end,
          discovery de novas tecnologias e planejamento da arquitetura do
          sistema.
        </TextContent>
      </TextContainer>
    </Container>

    <Container>
      <ImageContainer>
        <ImageContent src={CloudMed} alt="Imagem da logo da CloudMed" />
      </ImageContainer>
      <TextContainer>
        <TextRole>Desenvolvedor full stack</TextRole>
        <TextActivities>
          <BeBold>Linguagens/Frameworks:</BeBold> JavaScript, HTML, CSS, React,
          TypeScript, .NET, VB
        </TextActivities>
        <TextContent>
          Atuei no desenvolvimento da plataforma de compras da Unimed realizando
          as atividades de desenvolvimento do front end, criação de testes
          automatizados e correção de bugs no back end. Após isso participei do
          desenvolvimento de um sistema antifraude com reconhecimento facial,
          sendo responsavel pelo desenvolvimento do front end e deploy.
        </TextContent>
      </TextContainer>
    </Container>
    <Container>
      <ImageContainer>
        <ImageContent
          src={Tenda}
          alt="Imagem Imagem da logo da comunidade tenda"
        />
      </ImageContainer>
      <TextContainer>
        <TextRole>Gerente de projeto/Desenvolvedor full stack</TextRole>
        <TextActivities>
          <BeBold>Linguagens/Frameworks:</BeBold> JavaScript, HTML, CSS, React,
          TypeScript, Node.
        </TextActivities>
        <TextContent>
          Foi selecionada a comunidade Tenda para o desenvolvimento de um
          sistema Web, visando facilitar a gestão de escalas dos membros da
          comunidade. Atualmente a comunidade possui mais de mil casais, e
          produz vários eventos nos quais esses casais participam e precisam ser
          divididos em equipes com complexas regras organizacionais.
        </TextContent>
      </TextContainer>
    </Container>
    <Container>
      <ImageContainer>
        <ImageContent src={Fatec} alt="Imagem da logo da fatec franca" />
      </ImageContainer>
      <TextContainer>
        <TextRole>Analise e Desenvolvimento de Sistemas</TextRole>

        <TextContent>
          Curso Analise e Desenolvimento de Sistemas visando expandir meus
          conhecimentos a respeito do desenvolvimento de sistemas. Durante o
          curso atuei como tesoureiro do Diretório Academico, Monitor de
          Algoritos e lógica da programação e participei de uma iniciação
          cientifica. O objetivo da iniciação cientifica foi realizar um
          levantamento a respeito das vantagens e desvantagens da criação de
          Orteses e Proteses em impressão 3D, seus custos e a possibilidade de
          aumentar o acesso de pessoas com necessidades a uma melhor qualidade
          de vida
        </TextContent>
      </TextContainer>
    </Container>
  </MainContainer>
);

export default Professional;
