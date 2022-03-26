import React from 'react';
import styled from 'styled-components';
import { ThemeToggle } from './components';
const Container = styled.section`
  widht: 100%;
  display: flex;
`;

const Title = styled.div`
  justify-self: center;
  margin: auto;
`;

const Toggle = styled.div`
  justify-self: end;
  margin: auto 10px auto 0;
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Title>
        <h1>String Compare</h1>
      </Title>
      <Toggle>
        <ThemeToggle />
      </Toggle>
    </Container>
  );
};

export default Header;
