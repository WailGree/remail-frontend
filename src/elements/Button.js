import styled, { css } from "styled-components";

export default styled.button`
  background: transparent;
  border-radius: 4px;
  border: 9px solid red;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 0.5em;

  ${(props) =>
    props.primary &&
    css`
      background: red;
      color: white;
    `};
`;
