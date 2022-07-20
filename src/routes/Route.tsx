import { useAuth } from "../hooks/auth";
import { 
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect
} from 'react-router-dom';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean
  component: React.ComponentType
}

export function Route ({ isPrivate = false, component: Component, ...rest }: RouteProps) {
  const { user } = useAuth();

  return(
    <ReactDOMRoute {...rest} render={({location}) => {
      return isPrivate === !!user ? (
        <Component />
      ) : (
        <Redirect to={{
           pathname: isPrivate ? '/' : '/dasboard',
           state: { from: location }, 
        }}   />
      )
    }}/>
  )
}