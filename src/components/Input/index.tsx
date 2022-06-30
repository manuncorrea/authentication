import { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from "react";
import { IconBaseProps } from "react-icons";
import { useField } from "@unform/core";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>
}

export function Input({ name, icon: Icon, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [ isField, setIsField ] = useState(false);
  const [ isFocused, setIsFocused ] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

   setIsField(!!inputRef.current?.value)
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    });
  }, [fieldName, registerField]);

  return (
    <Container isField={isField} isFocused={isFocused}>
      { Icon && <Icon size={20} /> }
      <input
      onFocus={handleInputFocus}
      onBlur ={handleInputBlur}
      defaultValue={defaultValue}
      ref={inputRef}
      {...rest} 
      />
    </Container>
  )
}