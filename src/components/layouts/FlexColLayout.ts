import styled from "styled-components";

const FlexColLayout = styled.div`
  display: flex;
  flex-direction: column;

  & div {
    width: 100%;
    margin: 20px;
    gap: 10px;
  }
`;

export default FlexColLayout;
