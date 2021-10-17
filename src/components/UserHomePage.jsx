import { useEffect, useState } from "react";
import { Route } from "react-router";
import { AddTask } from "./AddTask";
import { Header } from "./Header";
import { NoTasks } from "./NoTasks";
import { Tasks } from "./Tasks";

export const UserHomePage = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);
  //[] - is a dependency array. if that value is changes you pass it in there
  /* you can not make useEffect function async, so you need to make another one in it */

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  //Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  //AddTask
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    //const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Check Task
  const checkTask = async (id) => {
    const taskToCheck = await fetchTask(id);
    const finishTask = { ...taskToCheck, checked: !taskToCheck.checked };
    //changing the reminder: "reminder: !taskToToggle.reminder

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(finishTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, checked: data.checked } : task
      )
    );
  };

  return (
    <section className="user-home-page">
      <div className="user-home-page-container" style={{ width: "22%" }}>
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {/* it's changing use state's value on a different one */}
        {/*
      the moment with showing NO TASKS;
      the Task component got wrapped into
      the rule:
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteask} />
      ) : (
        "No Task To Show"
      )}
      */}
        {showAddTask && <AddTask onAdd={addTask} />}
        {/* if showAddTask is true show the component AddTask */}
        {/* <Route path="/about" component={About} /> */}
        {/* <Footer /> */}
      </div>
      <div
        className="user-home-page-container"
        style={{
          width: "60%",
          height: "515px",
        }}
      >
        <Route
          path="/"
          render={(props) => (
            <>
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onChecked={checkTask}
                />
              ) : (
                <NoTasks />
              )}
            </>
          )}
        />
      </div>
    </section>
  );
};
