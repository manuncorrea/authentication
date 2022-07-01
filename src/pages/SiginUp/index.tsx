
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'

import { BoxContent } from "../../components/BoxContent";
import { Button } from '../../components/Button';
import { Input } from "../../components/Input";

import { Container } from './styles';

export function SiginUp() {
 const handleSubmit = useCallback( async (data: object ) => {
    try {
     const schema = Yup.object().shape({
      name: Yup.string().required('Nome obrigatório'),
      email: Yup.string().required('E-mail obrigatório').email('Digite um -email válido'),
      password: Yup.string().min(6, 'No mínimo 6 dígitos')
     });
     await schema.validate(data, {
      abortEarly: false, 
     });
    } catch (error) {
      console.log(error)
    }
  }, []);
  return(
    <>
      <BoxContent>
        <Container>

          <Form onSubmit={handleSubmit}>

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