import React from "react";
import styled from "styled-components";

const Container = styled.h3`
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 0px;
  margin: 0px;
`;

const Anchor = styled.a`
  color: #6f2232;
  text-decoration: none;
`;

type Props = {
  name: string;
  githubUrl: string;
};

const Author: React.FC<Props> = ({ name, githubUrl }) => (
  <Container>
    <Anchor href={githubUrl}>{name}</Anchor>
  </Container>
);

export default Author;
