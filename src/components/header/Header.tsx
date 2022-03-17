import React from "react";
import styles from "./Header.module.css";
import styled from "styled-components";

const Header: React.FC = () => {
  const Container = styled.section`
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;

  return (
    <Container>
      <h1>String Compare</h1>
    </Container>
  );
};

export default Header;
