import styled from "styled-components";
import { fontDefaultLigth } from "../../theme/text";
import BackGroundCode from "../../assets/images/backGroundCode.webp";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  margin: 0;
  font-family: ${fontDefaultLigth};
  font-weight: lighter;
  background-image: url(${BackGroundCode});
`;

export const ImageContainer = styled.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageContent = styled.img`
  width: 400px;
  border-radius: 50%;
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
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  font-size: 1.5em;
  font-weight: 600;
  color: white;
`;
