import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  text-align: justify;
`;

export const Divisor = styled.hr`
  display: flex;
  width: 100px;
  height: 1px;
  background-color: black;
  margin: 30px 0 0 0;
`;

export const ContainerTitle = styled.h1`
  margin: 0;
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 25px;
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
`;

export const ExperienceContainer = styled.button`
  display: flex;
  margin: 20px 0 0 0;
  padding: 10px;
  border-style: none;
  background-color: transparent;
  text-align: left;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 25px;
  }
`;

export const ExperienceContainerDescritiveText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 40px;
`;

export const ExperienceContainerResumeText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 0;
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

export const AcademyDescription = styled.h3`
  font-size: 15px;
  margin: 0;
  margin-top: 10px;
`;

export const AcademyComplement = styled.h4`
  font-size: 14px;
  margin: 0;
`;
