import { ReactNode } from "react";
import { Container } from "./styles";

interface IContent {
  children?: ReactNode
}

export function BoxContent({ children }: IContent) {
  return <Container data-testid="box-content">{children}</Container>
}