import { useContext } from "react";
import Switch from 'react-switch';
import { ThemeContext } from "styled-components";
import { Container, Content } from "./styles";

import logoImg from '../../assets/image/logo.png';

interface Props{
  toggleTheme(): void
}

export function Header({ toggleTheme }: Props) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Content>
      <Container>
        <div id="logo">
         <img src={logoImg} alt="" />
        </div>
        <div>
          <Switch 
            className="toggle"
            onChange={toggleTheme}
            checked ={title === 'dark'}
            onColor={colors.secundary}
          />
        </div>
      </Container>
    </Content>
  )
}