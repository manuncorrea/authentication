import styled from "styled-components";
import { shade } from 'polished';

export const Container = styled.button`
  background: #61dafb;
  width: 100%;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  font-weight: 400;
  margin-top: 20px;

  transform-origin: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#61dafb')};
    }
`