import React from "react";
import styled from "styled-components";

type Props = {
  left: React.ReactNode;
  right: React.ReactNode;
  submit: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
`;

const TwoColLayoutForm: React.FC<Props> = ({ left, right, submit }) => (
  <Form>
    <FormGroup>
      {left}
      {right}
    </FormGroup>
    {submit}
  </Form>
);

export default TwoColLayoutForm;
