import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  a {
    color: #f4edef;
    display: block;
    text-align: center;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover{
      color: ${shade(0.2, '#f4ede8')};
    }

    svg{
      margin-right: 10px;
    }
  }

 

  
`;