import React from "react";
import { SectionTitle, SectionLayout } from "../shared";
import { StringResultDisplay } from "./StringResultDisplay";

interface Props {
  title: string;
  result?: string;
}

const StringResult: React.FC<Props> = ({ title, result }) => (
  <SectionLayout>
    <SectionTitle>{title}</SectionTitle>
    <StringResultDisplay>{result}</StringResultDisplay>
  </SectionLayout>
);

export default StringResult;
