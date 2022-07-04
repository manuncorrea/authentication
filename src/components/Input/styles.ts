import styled, {css} from "styled-components";
import Tooltip from '../../components/Tooltip';
interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
  
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 20px 30px;
  margin: 12px 12px 0px 0px;
  border-radius: 8px;
  background: ${props => props.theme.colors.background};
  
  border: 2px solid ${props => props.theme.colors.background};
  color: rgb(255, 255, 255);

  display: flex;
  align-items: center;

  & + div{
    margin-top: 8px;
  }

  svg{
    margin-right: 16px;
    color:rgb(40, 39, 44);

    ${(props) => props.isFocused && css`
      color: #61dafb;
    `}

    ${(props) => props.isField && css`
      color: #61dafb;
    `}
  }

  ${(props) => props.isErrored && css`
    border-color: #c53030;
  `}


  ${(props) => props.isFocused && css`
      color: #61dafb;
      border-color: #61dafb;
    `}

  ${(props) => props.isField && css`
    color: #61dafb;
  `}

  
  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: ${props => props.theme.colors.linkColor};
    outline: 0;
    
    &::placeholder {
      font-weight: 400;
    }
  }
  
`;


export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;
    text-align: center;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;