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
import Q2bank from "../../assets/images/q2bank.png";
import CloudMed from "../../assets/images/cloudmed.png";
import Tenda from "../../assets/images/tenda.png";
import Fatec from "../../assets/images/fatec.png";

const Professional = () => {
  return (
    <MainContainer>
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
            voltado para os credenciados da Q2 terem maior controle das suas
            POS. Exercendo as atividades de desenvolvimento do frontend, deploy,
            criação de testes automatizados e criação de testes end to end.
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
            <BeBold>Linguagens/Frameworks:</BeBold> JavaScript, HTML, CSS,
            React, TypeScript, .NET, VB
          </TextActivities>
          <TextContent>
            Atuei no desenvolvimento da plataforma de compras da Unimed
            realizando as atividades de desenvolvimento do front end, criação de
            testes automatizados, correção de bugs no back end, atuei no
            desenvolvimento de um sistema antifraude com reconhecimento facial o
            desenvolvimento do front end e deploy.
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
            <BeBold>Linguagens/Frameworks:</BeBold> JavaScript, HTML, CSS,
            React, TypeScript, Node.
          </TextActivities>
          <TextContent>
            Foi selecionada a comunidade Tenda para o desenvolvimento de um
            sistema Web, objetivando facilitar a gestão de escalas dos membros
            da comunidade. Atualmente a comunidade possui mais de mil casais, e
            produz vários eventos nos quais esses casais participam e precisam
            ser divididos em grupos com complexas regras organizacionais.
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
            Cursndo Analise e Desenolvimento de Sistemas visando me consolidar
            como desenvolvedor. Durante o curso atuei como tesoureiro do
            Diretório Academico, Monitor de Algoritos e lógica da programação e
            participei de uma iniciação cientifica buscando analisar as
            vantagens da criação de Orteses e Proteses em impressão 3D com
            custos minimos e aumentando o acesso de pessoas com necessidades a
            uma melhor qualidade de vida
          </TextContent>
        </TextContainer>
      </Container>
    </MainContainer>
  );
};

export default Professional;
