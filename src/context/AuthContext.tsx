import React, { createContext, ReactNode, useCallback } from 'react';
import api from '../services/api';

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextDate {
    name: string;
    signIn(credentials: SignInCredentials): Promise<void>;
}


interface Teste {
  children: ReactNode
}

const AuthContext = createContext<AuthContextDate>({} as AuthContextDate);

function AuthProvider({ children }: Teste) {
    const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
        const response = await api.post('auth', {
            email, 
            password,
        });

        console.log(response.data);
    }, []);

    return(
        <AuthContext.Provider value={{ name: 'Emanuele', signIn}}>
            {children}
        </AuthContext.Provider>
    );
};



export { AuthContext, AuthProvider};