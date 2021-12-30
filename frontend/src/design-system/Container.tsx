import styled from "styled-components";

export const Container = styled.div`
position: absolute;
left: 0;
right: 0;
bottom: 0;
top: 160px;
display: flex;
justify-content: center;
align-items: center;
`

export const SingleColumnContainer = styled("div") <{ width: string , height?: string , marginTop?:string}>`
  width: ${props => props.width};
  margin-left: auto;
  margin-right: auto;
  height: ${props => props.height ? props.height : '400px;'}
  margin-top: ${props => props.marginTop};
  margin-bottom: 15px;
`;

export const JustifyCenterContainer = styled("div") <{ width: string }>`
  display: flex;
  justify-content: center;
  width: ${props => props.width};
`;
