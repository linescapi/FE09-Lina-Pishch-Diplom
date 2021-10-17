import { signOut } from "../../firebase/auth";

export const Main = () => {
  return (
    <div>
      <h3>Hello!</h3>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};
