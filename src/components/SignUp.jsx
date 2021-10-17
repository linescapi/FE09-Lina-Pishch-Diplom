import { useHistory } from "react-router";
import { createUser } from "../firebase/auth";
import { AuthForm } from "./AuthForm";

export const SignUp = () => {
  const getNewUser = async (login, password) => {
    createUser(login, password);
  };
  const history = useHistory();

  const routeToLogIn = () => {
    history.push("/login");
  };

  return (
    <AuthForm
      buttonName="Sign Up"
      text="I Have An Account"
      submitBtnHandler={getNewUser}
      routeBtnHandler={routeToLogIn}
    />
  );
};
