import styled from "styled-components";

export const InputField = styled.input`
  background-color: transparent;
  width:  ${props => props.width ? props.width : '47%;'}
  color: rgba(86, 86, 86, 1);
  outline: none;
  outline-style: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid rgba(86, 86, 86, 1) 2px;
  padding: 3px;
  font-size: 2em;
  margin-bottom: 20px;
  margin-left: 2%;
`;
