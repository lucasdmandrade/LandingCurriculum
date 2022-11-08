import styled from "styled-components";
import { fontDefaultLigth } from "../../theme/text";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  margin: 0;
  font-family: ${fontDefaultLigth};
  font-weight: lighter;
  background-color: #161617;
`;

export const ImageContainer = styled.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageContent = styled.img`
  width: 400px;

  &:hover {
    transform: perspective(600px) rotateZ(360deg);
    transition-duration: 1s;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  align-items: center;
  justify-content: center;
  padding: 5px 20px;
  text-align: center;
`;

export const TextContent = styled.h2`
  width: 500px;
  background-color: #f2f3f5;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px #f2f3f5;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  text-align: center;
  font-size: 1.5em;
  font-weight: 600;
  color: #666666;

  &:hover {
    transform: perspective(600px) rotateY(360deg);
    transition-duration: 2s;
  }
`;
