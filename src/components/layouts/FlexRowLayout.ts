import styled from "styled-components";

const FlexRowLayout = styled.div`
  display: flex;
  align-items: stretch;
  & div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px;
    gap: 10px;
  }
`;

export default FlexRowLayout;
