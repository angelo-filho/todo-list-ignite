import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { TaskForm } from "./components/TaskForm";

import { v4 as uuidV4 } from "uuid";

import styles from "./styles/app.module.scss";
import { Empty } from "./components/Empty";

interface ITask {
  id: string;
  description: string;
  isComplete: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isLocalStorageLoaded, setIsLocalStorageLoaded] = useState(false);

  useEffect(() => {
    const tasksAsString = localStorage.getItem("tasks") || "[]";
    const loadTasks = JSON.parse(tasksAsString);

    setTasks(loadTasks);
    setIsLocalStorageLoaded(true);
  }, []);

  useEffect(() => {
    if (isLocalStorageLoaded) {
      saveInLocalStorage();
    }
  }, [tasks, isLocalStorageLoaded]);

  const tasksAmount = tasks.length;
  const tasksCompleted = tasks.reduce(
    (count, task) => (task.isComplete ? count + 1 : count),
    0
  );

  function saveInLocalStorage() {
    const tasksAsString = JSON.stringify(tasks);

    localStorage.setItem("tasks", tasksAsString);
  }

  function createTask(description: string) {
    const newTask = {
      id: uuidV4(),
      description,
      isComplete: false,
    };

    const tasksWithTheNewOne = tasks.slice();
    tasksWithTheNewOne.push(newTask);

    setTasks(tasksWithTheNewOne);
  }

  function toggleTaskCompleteState(id: string) {
    const tasksWithNewTaskState = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }

      return task;
    });

    setTasks(tasksWithNewTaskState);
  }

  function removeTask(id: string) {
    const taskWithoutTheRemovedOne = tasks.filter((task) => task.id !== id);

    setTasks(taskWithoutTheRemovedOne);
  }

  return (
    <div>
      <Header />

      <main className={styles.main}>
        <TaskForm onSubmit={createTask} />

        <div className={styles.tasks_container}>
          <div className={styles.stats}>
            <strong>
              Tarefas criadas <span>{tasksAmount}</span>
            </strong>
            <strong>
              Concluídas{" "}
              <span>
                {tasksCompleted} de {tasksAmount}
              </span>
            </strong>
          </div>

          {tasksAmount !== 0 ? (
            <div className={styles.tasks}>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  id={task.id}
                  description={task.description}
                  isComplete={task.isComplete}
                  handleToggleIsComplete={toggleTaskCompleteState}
                  handleRemoveTask={removeTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
