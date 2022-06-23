import styled, {css} from "styled-components";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 20px 30px;
  margin: 12px 12px 0px 0px;
  border-radius: 8px;
  background: #121214;
  color: rgb(255, 255, 255);
 // outline: 1px solid #61dafb;


  display: flex;
  align-items: center;

  & + div{
   
    margin-top: 8px;
  }
  ${(props) => props.isFocused && css`
    color: #61dafb;
    border-color: #61dafb;
  `};

  ${(props) => props.isFilled && css`
    color: #61dafb;
  `}

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #fff;
    outline: 0;
    
    &::placeholder {
      font-weight: 400;
    }
  }

  svg{
    margin-right: 16px;
    color:rgb(40, 39, 44);
  }
`;