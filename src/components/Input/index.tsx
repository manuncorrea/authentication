import { InputHTMLAttributes, useRef, useState } from "react";
import { IconBaseProps } from "react-icons";

import { Container } from "./styles";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>
}

export function Input({ icon: Icon, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  

  return (
    <Container 
      isFocused={isFocused}
      isFilled={isFilled} 
      
    >
      { Icon && <Icon size={20} /> }
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={inputRef}
        {...rest} 
      />
    </Container>
  )
}