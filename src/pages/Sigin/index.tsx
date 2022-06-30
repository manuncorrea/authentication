import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';

import { BoxContent } from "../../components/BoxContent";
import { Button } from '../../components/Button';
import { Input } from "../../components/Input";
import { Container } from './styles';

export function Sigin() {
  function handleSubmit(data: object ) {
    console.log(data)
  }
  return (
    <>
      <BoxContent>
        <Container>
          <Form onSubmit={handleSubmit}>
          <Input name="email" icon={FiMail} placeholder="E-mail"/>
          <Input name="password" type="password" icon={FiLock} placeholder="Senha" />

            <Button>Entrar</Button>

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