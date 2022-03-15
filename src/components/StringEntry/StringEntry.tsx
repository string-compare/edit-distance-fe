import React from "react";
import { SectionTitle, SectionLayout } from "../shared";
import { StringEntryTextarea } from "./StringEntryTextarea";
interface Props {
  title: string;
  name: string;
  // onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const StringEntry: React.FC<Props> = ({ title, name }) => {
  const onChange = () => console.log("change");
  return (
    <SectionLayout>
      <SectionTitle>{title}</SectionTitle>
      <StringEntryTextarea
        placeholder="Enter A String..."
        name={name}
        onChange={onChange}
      />
    </SectionLayout>
  );
};

export default StringEntry;
