
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import { BoxContent } from "../../components/BoxContent";
import { Button } from '../../components/Button';
import { Input } from "../../components/Input";

import { Container } from './styles';

export function SiginUp() {
  function handleSubmit(data: object ) {
    console.log(data)
  }
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