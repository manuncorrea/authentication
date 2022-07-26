import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`

  a#forgotPassword{
    color: ${props => props.theme.colors.linkColor};
    display: block;
    text-align: center;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
  }

  a {
    color: ${ props => props.theme.colors.primary};
    display: block;
    text-align: center;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    svg{
        margin-right: 10px;
    }
    &:hover{
      color: ${shade(0.2, '#38c8fd')}
    }
    }
`;