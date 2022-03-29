import React from 'react';
import styled from 'styled-components';

type Props = {
  left: React.ReactNode;
  right: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  align-items: stretch;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px;
  gap: 10px;
`;

const TwoColLayout: React.FC<Props> = ({ left, right }) => (
  <Container>
    <Column>{left}</Column>
    <Column>{right}</Column>
  </Container>
);

export default TwoColLayout;
