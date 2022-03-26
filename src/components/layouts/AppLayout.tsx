import React from 'react';
import styled from 'styled-components';
import TwoColLayoutForm from './TwoColLayoutForm';
import { Header } from '../header';
import { StringEntry } from '../StringEntry';
import { Footer } from '../footer';
import { Button } from '../shared';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  height: 100vh;
`;

const AppLayout: React.FC = () => (
  <Container>
    <Header />
    <TwoColLayoutForm
      left={<StringEntry title="Generated String" name="genString" />}
      right={
        <>
          <StringEntry title="Expected String" name="expString" />
          <Button>Find Differences</Button>
        </>
      }
    />
    <Footer />
  </Container>
);

export default AppLayout;
