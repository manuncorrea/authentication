
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import { BoxContent } from "../../components/BoxContent";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from "../../components/Input";
import { Container } from './styles';

export function SiginUp() {
  return(
    <>
      <BoxContent>
        <Container>
          <div>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="nome" icon={FiMail} placeholder="E-mail"/>
          <Input name="password" type="password" icon={FiLock} placeholder="Senha" />

          <Button>Cadastrar</Button>

          </div>


          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>

        </Container>
      </BoxContent>
    </>
  )
}