import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 480px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  margin: auto;
  padding: 64px;
  border-radius: 5px;
  background: ${props => props.theme.colors.secundary};

  @media(max-width: 1024px){
    margin-top: 100px;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    margin: auto;
  }


  
`;