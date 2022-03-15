import React from "react";
import styled from "styled-components";
import TwoColLayoutForm from "./TwoColLayoutForm";
import { Header } from "../header";
import { StringEntry } from "../StringEntry";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppLayout: React.FC = () => (
  <Container>
    <Header />
    <TwoColLayoutForm
      left={<StringEntry title="Generated String" name="genString" />}
      right={<StringEntry title="Expected String" name="expString" />}
    />
  </Container>
);

export default AppLayout;
