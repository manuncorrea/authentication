import { Container, Toast } from "./styles";
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { ToastMessageProps, useToast } from '../../hooks/toast';

interface ToastContainerProps {
  messages: ToastMessageProps[]
}

export function ToastContainer({ messages }: ToastContainerProps) {
  const { removeToast } = useToast();

  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} type={message.type} hasDescription={!!message.description}>
          <FiAlertCircle size={20} />
          <div>
            <strong>{message.title}</strong>
            {message.description && <p>{message.description}</p>}
          </div>

          <button onClick={() => removeToast(message.id)} type="button">
            <FiXCircle size={18} />
          </button>
        </Toast>
      ))}
    </Container>
  )
}