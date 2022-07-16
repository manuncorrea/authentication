import { useCallback, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';

import * as Yup from 'yup';

import { AuthContext } from '../../context/AuthContext';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { BoxContent } from "../../components/BoxContent";
import { Button } from '../../components/Button';
import { Input } from "../../components/Input";

import getValidationErrors from '../../utils/getValidationErrors';

import { Container } from './styles';

interface SignInFormData {
  email: string,
  password: string,
}

export function Sigin() {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useContext(AuthContext);

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({}); // zerando os errors

     const schema = Yup.object().shape({
      email: Yup.string().required('E-mail obrigatório').email('Digite um -email válido'),
      password: Yup.string().required('Senha obrigatoria')
     });
     await schema.validate(data, {
      abortEarly: false, 
     });

     signIn({
      email: data.email,
      password: data.password,
     });

     
    } catch (err: any) {
     
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  },[signIn],
  );
  
  return (
    <>
      <BoxContent>
        <Container>
          <Form ref={formRef} onSubmit={handleSubmit}>
            
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

            <Button type="submit">Entrar</Button>

            <Link id="forgotPassword" to="#">Esqueci minha senha</Link>
          </Form>

          <Link to="/signup">
            <FiLogIn size={20} />
            Criar Conta
          </Link>

        </Container>
      </BoxContent>
    </>
  )
}