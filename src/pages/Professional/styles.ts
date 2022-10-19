import styled from "styled-components";
import { fontDefaultLigth } from "../../theme/text";

export const Container = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: black;
  display: flex;
  margin: 0;
  font-family: ${fontDefaultLigth};
  font-weight: lighter;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 50vw;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
`;

export const ImageContent = styled.img`
  display: flex;
  width: 35vw;
  margin: 0;
`;

export const TextContainer = styled.div`
  width: 50vw;
  align-items: center;
  background-color: red;
  justify-content: center;
  padding-top: 5px;
  text-align: center;
`;
