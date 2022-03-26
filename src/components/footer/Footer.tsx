import React from 'react';
import styled from 'styled-components';
import { Authors } from './components';

const Container = styled.section`
  width: 100%;
  // position: absolute;
  // bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;

const AUTHORS = [
  { githubUrl: 'https://github.com/cerebrium', name: 'Nick Shankland' },
  {
    githubUrl: ' https://github.com/thewordisbird',
    name: 'Justin Bird',
  },
];

const Footer: React.FC = () => {
  return (
    <Container>
      <Authors authors={AUTHORS} />
    </Container>
  );
};

export default Footer;
