import { ReactElement } from "react";
import { Container } from "./styles";

interface IContent {
  children?: ReactElement
}

export function BoxContent({ children }: IContent) {
  return <Container data-testid="box-content">{children}</Container>
}