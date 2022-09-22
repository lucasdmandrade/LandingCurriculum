import styled from "styled-components";
import { fontDefaultBold, fontDefaultBolder } from "../../../theme/text";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  margin-right: 25px;
  text-align: justify;
`;

export const ContainerTitle = styled.h1`
  margin: 0;
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 25px;
  font: ${fontDefaultBold};
`;

export const ContainerTitleDescription = styled.h3<{
  isSmokly?: boolean;
  haveMarginTop?: boolean;
}>`
  color: ${({ isSmokly }) => (isSmokly ? "rgba(0,0,0,0.45)" : "black")};
  margin: 0;
  margin-top: ${({ haveMarginTop }) => (haveMarginTop ? "10px" : "0")};
  font-size: 17px;
`;

export const ContentTitle = styled.h2`
  margin: 0;
  margin-top: 15px;
  font-size: 20px;
  font: ${fontDefaultBolder};
`;

export const Scroller = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  :target {
    scroll-margin-inline: initial;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ScrollerButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  img {
    width: 15px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

export const ExperienceContainer = styled.button`
  min-width: 100%;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  margin: 10px 0 0 0;
  padding: 5px;
  border-style: none;
  background-color: transparent;
  text-align: left;
  border: 1px solid transparent;
  animation: scrollingSlider 20s linear infinite;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 25px;
  }
`;

export const ExperienceContainerDescritiveText = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 40px;
`;

export const ExperienceContainerResumeText = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

export const ExperienceTitle = styled.h2`
  font-size: 17px;
  margin: 0;
`;

export const ExperienceDescription = styled.h3`
  font-size: 15px;
  margin: 0;
`;

export const ExperienceComplement = styled.h4<{ isSmokly?: boolean }>`
  font-size: 15px;
  margin: 0;
  color: ${({ isSmokly }) => (isSmokly ? "rgba(0,0,0,0.45)" : "black")};
`;

export const ScrollerPaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ScrollerPages = styled.h4<{ isActual?: boolean }>`
  width: 20px;
  height: 20px;
  text-align: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 50%;
  margin: 5px;
  background-color: ${({ isActual }) =>
    isActual ? "rgba(0,0,0,0.25)" : "transparent"};

  &:hover {
    cursor: pointer;
    border-radius: 25px;
  }
`;

export const AcademyDescription = styled.h3`
  font-size: 15px;
  margin: 0;
  margin-top: 10px;
`;

export const AcademyComplement = styled.h4`
  font-size: 14px;
  margin: 0;
`;
