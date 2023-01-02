import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { TaskForm } from "./components/TaskForm";

import { v4 as uuidV4 } from "uuid";

import styles from "./styles/app.module.scss";
import { Empty } from "./components/Empty";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Tasks } from "./components/Tasks";
import { Stats } from "./components/Stats";

interface ITask {
  id: string;
  description: string;
  isComplete: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const { isLocalStorageLoaded, saveInLocalStorage } = useLocalStorage({
    itemName: "tasks",
    onLoad: setTasks,
  });

  useEffect(() => {
    if (isLocalStorageLoaded) {
      saveInLocalStorage(tasks);
    }
  }, [tasks, isLocalStorageLoaded]);

  const tasksAmount = tasks.length;
  const tasksCompleted = tasks.reduce(
    (count, task) => (task.isComplete ? count + 1 : count),
    0
  );

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
          <Stats tasksAmount={tasksAmount} tasksCompleted={tasksCompleted} />

          {tasksAmount !== 0 ? (
            <Tasks
              tasks={tasks}
              removeTask={removeTask}
              toggleTaskCompleteState={toggleTaskCompleteState}
            />
          ) : (
            <Empty />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
