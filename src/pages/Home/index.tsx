
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';

export function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
     localStorage.removeItem('@Authentication:token');
     localStorage.removeItem('@Authentication:user');

     navigate("/")
  }
  return (
    <>
      <Container>
        <button type='submit' onClick={handleLogout}>SAIR</button>
      </Container>

    </>
  )
}