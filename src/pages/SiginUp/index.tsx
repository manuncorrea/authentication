
import { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'

import { BoxContent } from "../../components/BoxContent";
import { Button } from '../../components/Button';
import { Input } from "../../components/Input";

import { Container } from './styles';

export function SiginUp() {
 const formRef = useRef<FormHandles>(null);

 console.log(formRef)

 const handleSubmit = useCallback( async (data: object ) => {
    try {
      formRef.current?.setErrors({})

     const schema = Yup.object().shape({
      name: Yup.string().required('Nome obrigatório'),
      email: Yup.string().required('E-mail obrigatório').email('Digite um -email válido'),
      password: Yup.string().min(6, 'No mínimo 6 dígitos')
     });
     await schema.validate(data, {
      abortEarly: false, 
     });

     
    } catch (err: any) {
      console.log(err);
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return(
    <>
      <BoxContent>
        <Container>

          <Form ref={formRef} onSubmit={handleSubmit}>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail"/>
          <Input name="password" type="password" icon={FiLock} placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>

          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>

        </Container>
      </BoxContent>
    </>
  )
}