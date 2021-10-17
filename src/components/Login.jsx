// import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { signIn } from "../firebase/auth";
import { AuthForm } from "./AuthForm";

export const Login = () => {
  const handleSubmit = (login, password) => {
    signIn(login, password);
  };

  const history = useHistory();

  const routeToSignUp = () => {
    history.push("/signUp");
  };

  return (
    <AuthForm
      buttonName="Log In"
      text="I Want To Create An Account"
      submitBtnHandler={handleSubmit}
      routeBtnHandler={routeToSignUp}
    />
  );
};
