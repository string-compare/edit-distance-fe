import React from "react";
import { SectionTitle } from "../shared";
import { StringEntryLayout } from "./StringEntryLayout";
import { StringEntryTextarea } from "./StringEntryTextarea";
interface Props {
  title: string;
}

const StringEntry: React.FC<Props> = ({ title }) => {
  return (
    <StringEntryLayout>
      <SectionTitle>{title}</SectionTitle>
      <StringEntryTextarea placeholder="Enter A String..." />
    </StringEntryLayout>
  );
};

export default StringEntry;
