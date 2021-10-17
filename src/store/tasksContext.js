import { downloadTasks } from "../firebase/storage";
import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "./userContext";

const taskContext = createContext();

export const TasksProvider = ({ children }) => {
  const user = useUser();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    user && user.uid && downloadTasks(user.uid).then((res) => setTasks(res));
  }, [user]);

  return <taskContext.Provider value={tasks}>{children}</taskContext.Provider>;
};

export const useTasks = () => {
  const tasksArray = useContext(taskContext);
  return taskContext;
};
