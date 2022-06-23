import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';

import { BoxContent } from "../../components/BoxContent";
import { Button } from '../../components/Button';
import { Input } from "../../components/Input";

export function Sigin() {
  return(
    <>
      <BoxContent>
        <div>
         <Input name="email" icon={FiMail} placeholder="E-mail" />
         <Input name="password" type="password" icon={FiLock} placeholder="Senha" />

         <Button>Entrar</Button>

        </div>
      </BoxContent>
    </>
  )
}