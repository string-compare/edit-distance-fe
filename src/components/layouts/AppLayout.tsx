import React from "react";
import styled from "styled-components";
import TwoColLayoutForm from "./TwoColLayoutForm";
import { Header } from "../header";
import { StringEntry } from "../StringEntry";
import { Footer } from "../footer";

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
    <Footer />
  </Container>
);

export default AppLayout;
