import React from "react";
import styled from "styled-components";

type Props = {
  left: React.ReactNode;
  right: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const TwoColLayout: React.FC<Props> = ({ left, right }) => (
  <Container>
    {left}
    {right}
  </Container>
);

export default TwoColLayout;
