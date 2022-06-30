import styled from "styled-components";

export const Content = styled.div`
 position: relative;
  width: 100%;
  height: 80px;
  background: ${props => props.theme.colors.primary};
  box-shadow: 0 2px 6px rgba(0, 0 , 0, .16);
  z-index: 2;
`;
export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;

  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div#logo {
    img {
      width: 220px;
      height: 65px;
    }
  }
`;