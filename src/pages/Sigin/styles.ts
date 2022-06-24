import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`

  a#forgotPassword{
    color: #f4edef;
    display: block;
    text-align: center;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
  }

  a {
    color: #61dafb;
    display: block;
    text-align: center;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    svg{
        margin-right: 10px;
    }
    &:hover{
      color: ${shade(0.2, '#61dafb')}
    }
    }
`;