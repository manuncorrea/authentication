import { createContext, ReactNode, useCallback, useState } from 'react';
import api from '../services/api';

interface  AuthState {
    token: string;
    user: object;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextDate {
    user: object;
    signIn(credentials: SignInCredentials): Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextDate>({} as AuthContextDate);

function AuthProvider({ children }: AuthProviderProps) {
    const [data, setData] = useState<AuthState>(() => {
       const token = localStorage.getItem('@Authentication:token');
       const user =localStorage.getItem('@Authentication:user');

       if(token && user) {
        return { token, user: JSON.parse(user)}
       }

       return {} as AuthState;
    });

    const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
        const response = await api.post('auth', {
            email, 
            password,
        });

        const { token, user } = response.data;

        localStorage.setItem('@Authentication:token', token);
        localStorage.setItem('@Authentication:user', JSON.stringify(user));

        setData({ token, user });
    }, []);

    return(
        <AuthContext.Provider value={{ user: data.user, signIn}}>
            {children}
        </AuthContext.Provider>
    );
};



export { AuthContext, AuthProvider};