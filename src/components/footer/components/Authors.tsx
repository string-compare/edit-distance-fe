import React from "react";
import styled from "styled-components";
import Author from "./Author";

type Props = {
  authors: { name: string; githubUrl: string }[];
};

const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Authors: React.FC<Props> = ({ authors }) => (
  <Container>
    {authors.map((author, idx, arr) => {
      if (idx == arr.length - 1)
        return <Author name={author.name} githubUrl={author.githubUrl} />;
      return (
        <>
          <Author name={author.name} githubUrl={author.githubUrl} />
          &#38;&#38;{" "}
        </>
      );
    })}
  </Container>
);

export default Authors;
