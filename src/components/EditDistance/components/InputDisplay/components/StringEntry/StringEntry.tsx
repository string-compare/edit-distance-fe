import React from "react";
import styled from "styled-components";
import { SectionTitle, SectionLayout } from "../../../../../shared";
import { StringEntryTextarea } from "./StringEntryTextarea";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
`;

interface Props {
  title: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const StringEntry: React.FC<Props> = ({ title, name }) => {
  const onChange = () => console.log("change");
  return (
    <Container>
      <h3>{title}</h3>
      <StringEntryTextarea
        placeholder="Enter A String..."
        name={name}
        onChange={onChange}
      />
    </Container>
  );
};

export default StringEntry;
