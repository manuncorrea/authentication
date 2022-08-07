import { useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLock, FiLogIn, FiMail } from "react-icons/fi";

import * as Yup from "yup";

import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { BoxContent } from "../../components/BoxContent";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import getValidationErrors from "../../utils/getValidationErrors";

import { Container } from "./styles";
import schemeValidationUser from "./validation/validationUser";
import {
  DESCRIPTION_AUTHENTICATION_ERROR,
  TITLE_AUTHENTICATION_ERROR,
} from "./constants";

export interface SignInFormData {
  email: string;
  password: string;
}

export function SigIn() {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (data: SignInFormData) => {
      setDefaultError();
      validationUser(data);
    },
    [signIn, addToast]
  );

  function setDefaultError() {
    formRef.current?.setErrors({});
  }

  async function validationUser(data: SignInFormData) {
    try {
      await schemeValidationUser(data);
      handleSignInUser(data);
    } catch (error) {
      const err = error as Yup.ValidationError;
      const validationErrors = getValidationErrors(err);
      formRef.current?.setErrors(validationErrors);
    }
  }

  async function handleSignInUser(data: SignInFormData) {
    try {
      await signIn({
        email: data.email,
        password: data.password,
      });

      navigate("/home");
    } catch (error) {
      handleErrorToast(
        TITLE_AUTHENTICATION_ERROR,
        DESCRIPTION_AUTHENTICATION_ERROR
      );
    }
  }

  function handleErrorToast(title: string, description: string) {
    addToast({
      type: "error",
      title: title,
      description: description,
    });
  }

  return (
    <>
      <BoxContent>
        <Container>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Entrar</Button>

            <Link id="forgotPassword" to="#">
              Esqueci minha senha
            </Link>
          </Form>

          <Link to="/signup">
            <FiLogIn size={20} />
            Criar Conta
          </Link>
        </Container>
      </BoxContent>
    </>
  );
}
