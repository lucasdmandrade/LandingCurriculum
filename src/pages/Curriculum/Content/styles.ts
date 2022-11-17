import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  margin-right: 25px;
  text-align: justify;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
`;

export const ContainerTitle = styled.h1`
  margin: 0;
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 1.8em;
  font-weight: 600;
`;

export const ContainerTitleDescriptionGradient = styled.h3<{}>`
  background-image: linear-gradient(to bottom, black, transparent);

  background-clip: text;
  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;

  color: black;
`;

export const ContainerTitleDescription = styled.h3<{
  isSmokly?: boolean;
  removeMarginTop?: boolean;
}>`
  color: ${({ isSmokly }) => (isSmokly ? "rgba(0,0,0,0.45)" : "black")};
  margin: 0;
  margin-top: ${({ removeMarginTop }) => (removeMarginTop ? 0 : "10px")};
  font-size: 1.2em;
`;

export const ContentTitle = styled.h2`
  margin: 0;
  margin-top: 15px;
  font-size: 1.4em;
  font-weight: 600;
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0 0 0;
  padding: 5px;
  border-style: none;
`;

export const ExperienceContent = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 0 0;
  border-style: none;
  background-color: transparent;
  text-align: left;
  border: 1px solid transparent;
  border-radius: 15px;
`;

export const ExperienceContainerDescritiveText = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 40px;
`;

export const ExperienceContainerResumeText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExperienceTitle = styled.h2`
  font-size: 1.2em;
  margin: 5px 0 0;
`;

export const ExperienceDescription = styled.h3`
  font-size: 1.2em;
  margin: 3px 0 0;
`;

export const ExperienceComplement = styled.h4<{ isSmokly?: boolean }>`
  font-size: 1.1em;
  margin: 3px 0 0;
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

export const ScrollerLockButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const ScrollerButtonImg = styled.img`
  width: 25px;
  height: 25px;
`;

export const AcademyDescription = styled.h3`
  font-size: 1.2em;
  margin: 0;
  margin-top: 10px;
`;

export const AcademyComplement = styled.h4`
  font-size: 1.1em;
  margin: 0;
`;
