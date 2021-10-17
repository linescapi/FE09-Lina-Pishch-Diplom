import { useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router";
import { Login } from "../../components/Login";
import { UserHomePage } from "../../components/UserHomePage";
import { SignUp } from "../../components/SignUp";
import { useUser } from "../userContext";
import { Main } from "./Main";

export const Routing = () => {
  const user = useUser();

  const history = useHistory();

  useEffect(() => {
    user && user.uid && history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signUp">
        <SignUp />
      </Route>
      {!user && <Redirect to="/login" />}
      <Route>
        <UserHomePage />
      </Route>
    </Switch>
  );
};
