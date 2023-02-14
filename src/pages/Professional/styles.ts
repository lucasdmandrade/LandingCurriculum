import styled from "styled-components";
import { fontDefaultLigth } from "../../theme/text";

export const Container = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: row;
  display: flex;
  margin: 0;
  font-family: ${fontDefaultLigth};
  font-weight: lighter;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 50vw;
  background-color: black;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
`;

export const ImageContent = styled.img`
  display: flex;
  width: 30vw;
  margin: 0;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  background-color: #f2f3f5;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const TextRole = styled.h2`
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  font-size: 1.5em;
  margin-bottom: 30px;
  font-weight: 600;
`;

export const TextActivities = styled.h2`
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  font-size: 1.35em;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const TextContent = styled.h3`
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  font-size: 1.25em;
  padding: 5px 20px;
`;

export const BeBold = styled.span`
  font-weight: 600;
`;
