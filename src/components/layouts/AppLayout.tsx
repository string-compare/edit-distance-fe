import React from 'react';
import styled from 'styled-components';
import { Footer } from '../footer';
import { Header } from '../header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  height: 100vh;
`;

const AppLayout: React.FC = ({ children }) => (
  <Container>
    <Header />
    {children}
    <Footer />
  </Container>
);

export default AppLayout;
