import styled from "styled-components";
import { fontDefaultLigth } from "../../theme/text";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-family: ${fontDefaultLigth};
  background-color: #f2f3f5;
`;

export const EmulatorContainer = styled.div`
  height: 500px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  margin-top: 55px;
  border-radius: 35px;
`;

export const EmulatorScreen = styled.iframe`
  height: 510px;
  width: 250px;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 25px;
  border-radius: 35px;
`;

export const EmulatorButtonContainer = styled.div`
  display: flex;
  align-items: center;
  height: 75px;
`;

export const EmulatorButton = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const EmulatorButtonInside = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 0;
  display: flex;
  background-color: black;
`;
