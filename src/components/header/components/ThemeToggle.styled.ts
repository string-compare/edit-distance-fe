import styled from 'styled-components';

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &::checked {
    background-color: #6f2232;
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &::before {
    position: absolute;
    content: '';
    height: 15px;
    width: 15px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  ${Input}:checked + & {
    background-color: #6f2232;
  }

  ${Input}:focus + & {
    box-shadow: 0 0 1px #6f2232;
  }

  ${Input}:checked + &::before {
    -webkit-transform: translateX(25px);
    -ms-transform: translateX(25px);
    transform: translateX(25px);
  }

  .round {
    border-radius: 34px;
  }

  .round::before {
    border-radius: 50%;
  }
`;