import React from "react";
import MainContainer from "../../components/MainContainer";
import PersonalPhoto from "../../assets/personalPhoto.jpg";
import happyDeveloper from "../../assets/happyDeveloper.svg";

import {
  Container,
  ImageContainer,
  ImageContent,
  TextContainer,
  TextContent,
} from "./styles";

const Curriculum = () => {
  return (
    <MainContainer RemovePadding>
      <Container>
        <ImageContainer>
          <ImageContent src={happyDeveloper} alt="Imagem de perfil" />
        </ImageContainer>
        <TextContainer>
          <TextContent>
            Atualmente, inserido na área da programação, sou movido pelos
            estímulos dos projetos diários e pela busca de soluções únicas e
            inusitadas. Isso se deve, pois, na área de desenvolvimento de
            softwares não existe uma única resposta para as situações ou uma
            única forma de atingir seus objetivos. Logo, as várias
            possibilidades me motivam à dedicação às minhas metas, sendo que o
            desafio renova minhas forças para o conhecimento constante. Dessa
            forma, busco confeccionar meus projetos de maneira eficiente, por
            meio de métodos pensados estrategicamente.
          </TextContent>
        </TextContainer>
      </Container>
    </MainContainer>
  );
};

export default Curriculum;
