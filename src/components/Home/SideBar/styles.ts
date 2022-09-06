import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: #2c3050;
  margin: 0;
  padding: 15px;
  color: #ffffff;

  a {
    color: #ffffff;
    text-decoration: none;
  }
`;

export const ContainerTitle = styled.h1`
  font-size: 28px;
`;

export const ContactsContainer = styled.div`
  display: flex;
`;

export const ContactsContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 3px 0;
`;

export const ContentTitle = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const Content = styled.h3`
  font-size: 16px;
  margin: 0;
  margin-left: 5px;
`;
