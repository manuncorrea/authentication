
import { useCallback, useRef } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import * as Yup from 'yup';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';


import { BoxContent } from "../../components/BoxContent";
import { Button } from '../../components/Button';
import { Input } from "../../components/Input";


import { Container } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

export function SiginUp() {
 const formRef = useRef<FormHandles>(null);
 const { addToast } = useToast();
 const navigate = useNavigate();

 const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try{
      formRef.current?.setErrors({}); 

     const schema = Yup.object().shape({
      name: Yup.string().required('Nome obrigatório'),
      email: Yup.string().required('E-mail obrigatório').email('Digite um -email válido'),
      password: Yup.string().min(6, 'No mínimo 6 dígitos')
     });

     await schema.validate(data, {
      abortEarly: false, 
     });

     await api.post('/users', data);

     navigate("/");
     addToast({
      type: 'success',
      title: 'Cadastro realizado!',
      description: 'Você já pode fazer seu login com sucesso!'
     });

    } catch (err: any) {
      if(err instanceof Yup.ValidationError) {

        const errors = getValidationErrors(err);
  
        formRef.current?.setErrors(errors);

        return;
      }

      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Ocorreu um erro ao fazer seu cadastro, tente novamente!'
      });
    }
  }, [addToast, navigate]);

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
            Login
          </Link> 

        </Container>
      </BoxContent>
    </>
  )
}