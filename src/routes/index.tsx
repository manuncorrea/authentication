import {  Switch } from "react-router-dom";

import { Route } from './Route';

import { Sigin } from "../pages/Sigin";
import { SiginUp } from "../pages/SiginUp";

import { Dashboard } from "../pages/Dashboard";

export function AppRoutes() {
  return(
    <Switch>
       <Route path="/" exact component={Sigin } />
        <Route path="/signup" component={SiginUp} />

        <Route path="/dasboard" component={Dashboard } isPrivate  />
    </Switch>
  )
}