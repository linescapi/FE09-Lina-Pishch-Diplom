import { UserProvider } from "./userContext";
// import { TasksProvider } from "./tasksContext";

export const Providers = ({ children }) => (
  <UserProvider>
    {/* <TasksProvider>{children}</TasksProvider> */}
    {children}
  </UserProvider>
);
