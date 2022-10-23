import styled, { css } from "styled-components";
export default styled.input`
  font-family: sans-serif;
  font-size: 1.3rem;
  border: 2px solid;
  border-radius: 5px;
  padding: 7px 10px;
  background: white;
  text-align: center;
  ${(props) =>
    props.border &&
    css`
      border-color: ${(props) => props.border};
    `}
  color:black;
`;
