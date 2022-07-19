import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { ToastContainer } from "../components/ToastContainer";

import { v4 as uuidv4 } from "uuid";

export interface ToastMessageProps {
  id: string;
  type?: 'sucess' | 'error' | 'info';
  title: string;
  description?: string;

}
interface ToastProviderProps {
  children: ReactNode
}

interface ToastContextDataProps {
  addToast(message: Omit<ToastMessageProps, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextDataProps>({} as ToastContextDataProps);

export function ToastProvider ({ children }: ToastProviderProps) {
  const [messages, setMessages] = useState<ToastMessageProps[]>([]);


  const addToast = useCallback(({type, title, description}: Omit<ToastMessageProps, 'id'>) => {
   const id = uuidv4();

   const toast = {
    id,
    type,
    title,
    description
   };

   setMessages((state) => [...state, toast])
  }, []);

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id))
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  )
}

export function useToast(): ToastContextDataProps {
  const context = useContext(ToastContext)

  if(!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

