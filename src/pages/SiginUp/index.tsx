
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'

import { BoxContent } from "../../components/BoxContent";
import { Button } from '../../components/Button';
import { Input } from "../../components/Input";

export function SiginUp() {
  return(
    <>
      <BoxContent>
        <div>

         <Input name="name" icon={FiUser} placeholder="Nome" />
         <Input name="nome" icon={FiMail} placeholder="E-mail"/>
         <Input name="password" type="password" icon={FiLock} placeholder="Senha" />

         <Button>Cadastrar</Button>

        </div>
      </BoxContent>
    </>
  )
}