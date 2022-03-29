import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import styles from './StringEntryTextarea.module.css';
import { ErrorGroup } from "functional_edit_distance/build/src/types";

const Container = styled.textarea`
  resize: none;
  margin: 10px;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  border: 1px solid black;

  &:focus {
    outline: none !important;
    border-color: #e6e6e6;
    box-shadow: 0 0 4px #e6e6e6;
    background-color: #e6e6e6;
  }

  &:hover {
    outline: none !important;
    border-color: #eeeeee;
    box-shadow: 0 0 4px #eeeeee;
    background-color: #eeeeee;
  }
`;

// extend textarea types
type Props = {
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  errors?: Array<ErrorGroup>;
};

const StringEntryTextarea: React.FC<Props> = ({
  placeholder,
  onChange,
  name,
  errors,
}) => {
  const [value, setValue] = useState<string | undefined>();

  useEffect(() => {}, []);

  return (
    <Container placeholder={placeholder} name={name} onChange={onChange} />
  );
};

export default StringEntryTextarea;
