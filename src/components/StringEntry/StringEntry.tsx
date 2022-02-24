import React from "react";
import { SectionTitle, SectionLayout } from "../shared";
import { StringEntryTextarea } from "./StringEntryTextarea";
interface Props {
  title: string;
}

const StringEntry: React.FC<Props> = ({ title }) => {
  return (
    <SectionLayout>
      <SectionTitle>{title}</SectionTitle>
      <StringEntryTextarea placeholder="Enter A String..." />
    </SectionLayout>
  );
};

export default StringEntry;
