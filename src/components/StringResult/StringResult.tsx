import React from "react";
import { SectionTitle } from "../shared";
import { StringResultDisplay } from "./StringResultDisplay";
import { StringResultLayout } from "./StringResultLayout";

interface Props {
  title: string;
}

export const StringResult: React.FC<Props> = ({ title }) => (
  <StringResultLayout>
    <SectionTitle>{title}</SectionTitle>
    <StringResultDisplay></StringResultDisplay>
  </StringResultLayout>
);

export default StringResult;
